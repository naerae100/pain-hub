const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'src/assets');
const DATA_DIR = path.join(__dirname, 'src/data');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

function getCryoPdfs(baseDir) {
    const results = [];
    if (!fs.existsSync(baseDir)) return results;
    const areas = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory() && !f.startsWith('.'));
    for (const area of areas) {
        const areaPath = path.join(baseDir, area);
        const levels = fs.readdirSync(areaPath).filter(f => fs.statSync(path.join(areaPath, f)).isDirectory() && !f.startsWith('.'));
        for (const level of levels) {
            const levelPath = path.join(areaPath, level);
            const files = fs.readdirSync(levelPath).filter(f => f.endsWith('.pdf'));
            for (const file of files) {
                results.push({
                    title: file.replace('.pdf', '').replace(/_/g, ' '),
                    filename: file,
                    anatomicalArea: area.replace(/_/g, '/').replace(/ \//g, '/').replace(/\/ /g, '/').trim(),
                    levelOfEvidence: level.replace(/ _ /g, ' / ').trim(),
                    relativePath: 'Sorted Pdfs/' + area + '/' + level + '/' + file
                });
            }
        }
    }
    return results;
}

function collectPdfsRecursive(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    for (const item of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.')) {
            results = results.concat(collectPdfsRecursive(fullPath));
        } else if (item.endsWith('.pdf')) {
            results.push(fullPath);
        }
    }
    return results;
}

function getBalloonPdfs(baseDir) {
    const results = [];
    if (!fs.existsSync(baseDir)) return results;
    const topDirs = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory() && !f.startsWith('.'));
    for (const topDir of topDirs) {
        const cleanCat = topDir.replace(/^\d+\s*/, '');
        const catPath = path.join(baseDir, topDir);
        const pdfs = collectPdfsRecursive(catPath);
        for (const pdfPath of pdfs) {
            const file = path.basename(pdfPath);
            results.push({
                title: file.replace('.pdf', '').replace(/_/g, ' '),
                filename: file,
                category: cleanCat,
                relativePath: path.relative(ASSETS_DIR, pdfPath)
            });
        }
    }
    return results;
}

function getFlatPdfs(baseDir, label) {
    const results = [];
    if (!fs.existsSync(baseDir)) return results;
    for (const file of fs.readdirSync(baseDir).filter(f => f.endsWith('.pdf'))) {
        results.push({
            title: file.replace('.pdf', '').replace(/_/g, ' '),
            filename: file,
            relativePath: label + '/' + file
        });
    }
    return results;
}

const cryo = getCryoPdfs(path.join(ASSETS_DIR, 'Sorted Pdfs'));
const balloon = getBalloonPdfs(path.join(ASSETS_DIR, 'Sorted Evidence Library'));
const prp = getFlatPdfs(path.join(ASSETS_DIR, 'Platelet-based '), 'Platelet-based ');
const pldd = getFlatPdfs(path.join(ASSETS_DIR, 'Percutaneous'), 'Percutaneous');

const cryoAreas = [...new Set(cryo.map(c => c.anatomicalArea))].sort();
const cryoLevels = [...new Set(cryo.map(c => c.levelOfEvidence))].sort();
const balloonCategories = [...new Set(balloon.map(b => b.category))].sort();

const output = [
    '// Auto-generated evidence data',
    '',
    'export interface CryoPdf { title: string; filename: string; anatomicalArea: string; levelOfEvidence: string; relativePath: string; }',
    'export interface BalloonPdf { title: string; filename: string; category: string; relativePath: string; }',
    'export interface FlatPdf { title: string; filename: string; relativePath: string; }',
    '',
    'export const cryoPdfs: CryoPdf[] = ' + JSON.stringify(cryo, null, 2) + ';',
    '',
    'export const balloonPdfs: BalloonPdf[] = ' + JSON.stringify(balloon, null, 2) + ';',
    '',
    'export const prpPdfs: FlatPdf[] = ' + JSON.stringify(prp, null, 2) + ';',
    '',
    'export const plddPdfs: FlatPdf[] = ' + JSON.stringify(pldd, null, 2) + ';',
    '',
    'export const cryoAnatomicalAreas = ' + JSON.stringify(cryoAreas) + ' as const;',
    'export const cryoLevelsOfEvidence = ' + JSON.stringify(cryoLevels) + ' as const;',
    'export const balloonCategoryNames = ' + JSON.stringify(balloonCategories) + ' as const;',
].join('\n');

fs.writeFileSync(path.join(DATA_DIR, 'evidence.ts'), output);

console.log('Cryo PDFs: ' + cryo.length + ' (' + cryoAreas.length + ' areas, ' + cryoLevels.length + ' levels)');
console.log('Balloon PDFs: ' + balloon.length + ' (' + balloonCategories.length + ' categories: ' + balloonCategories.join(', ') + ')');
console.log('PRP PDFs: ' + prp.length);
console.log('PLDD PDFs: ' + pldd.length);
console.log('Written to src/data/evidence.ts');
