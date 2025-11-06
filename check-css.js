#!/usr/bin/env node
/**
 * CSS Loading Verification Script
 * 
 * This script verifies that:
 * 1. All HTML files have the correct stylesheet path (./assets/style.css?v=17)
 * 2. The CSS file exists
 * 3. The CSS file has valid syntax (balanced brackets)
 * 
 * Usage: node check-css.js
 */

const fs = require('fs');
const path = require('path');

const HTML_FILES = [
  'index.html',
  'people.html',
  'projects.html',
  'publications.html',
  'contact.html',
  'gallery.html',
  'announcements.html',
  'highlights.html',
  'news.html',
  'join-our-study.html'
];

const EXPECTED_CSS_PATH = './assets/style.css?v=17';
const CSS_FILE = 'assets/style.css';

let errors = [];
let warnings = [];

console.log('🔍 Checking CSS loading configuration...\n');

// Check 1: Verify CSS file exists
console.log('1️⃣ Checking if CSS file exists...');
if (!fs.existsSync(CSS_FILE)) {
  errors.push(`CSS file not found: ${CSS_FILE}`);
  console.log('   ❌ CSS file not found');
} else {
  console.log('   ✅ CSS file exists');
}

// Check 2: Verify CSS syntax (balanced brackets)
console.log('\n2️⃣ Checking CSS syntax...');
if (fs.existsSync(CSS_FILE)) {
  const css = fs.readFileSync(CSS_FILE, 'utf8');
  let openBrackets = 0;
  let lineNum = 1;
  let lastOpenLine = 0;
  
  for (let i = 0; i < css.length; i++) {
    const char = css[i];
    if (char === '\n') lineNum++;
    if (char === '{') {
      openBrackets++;
      lastOpenLine = lineNum;
    }
    if (char === '}') {
      openBrackets--;
      if (openBrackets < 0) {
        errors.push(`Unclosed closing bracket at line ${lineNum} in ${CSS_FILE}`);
      }
    }
  }
  
  if (openBrackets > 0) {
    errors.push(`Unclosed opening bracket(s) in ${CSS_FILE} (last opened at line ${lastOpenLine})`);
    console.log('   ❌ CSS syntax error: unbalanced brackets');
  } else if (openBrackets < 0) {
    console.log('   ❌ CSS syntax error: extra closing brackets');
  } else {
    console.log('   ✅ CSS syntax is valid (brackets balanced)');
  }
}

// Check 3: Verify all HTML files have correct stylesheet path
console.log('\n3️⃣ Checking HTML files for correct stylesheet paths...');
let htmlChecked = 0;
let htmlFixed = 0;

HTML_FILES.forEach(file => {
  if (!fs.existsSync(file)) {
    warnings.push(`HTML file not found: ${file}`);
    console.log(`   ⚠️  ${file} - file not found`);
    return;
  }
  
  const content = fs.readFileSync(file, 'utf8');
  const linkRegex = /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/i;
  const match = content.match(linkRegex);
  
  if (!match) {
    errors.push(`${file}: No stylesheet link found`);
    console.log(`   ❌ ${file} - no stylesheet link found`);
  } else {
    const href = match[1];
    if (href === EXPECTED_CSS_PATH) {
      console.log(`   ✅ ${file} - correct path`);
      htmlChecked++;
    } else {
      errors.push(`${file}: Incorrect path "${href}" (expected "${EXPECTED_CSS_PATH}")`);
      console.log(`   ❌ ${file} - incorrect path: "${href}"`);
    }
  }
});

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Summary:');
console.log(`   HTML files with correct path: ${htmlChecked}/${HTML_FILES.length}`);
console.log(`   Errors: ${errors.length}`);
console.log(`   Warnings: ${warnings.length}`);

if (warnings.length > 0) {
  console.log('\n⚠️  Warnings:');
  warnings.forEach(w => console.log(`   - ${w}`));
}

if (errors.length > 0) {
  console.log('\n❌ Errors found:');
  errors.forEach(e => console.log(`   - ${e}`));
  console.log('\n❌ CSS loading verification FAILED');
  process.exit(1);
} else {
  console.log('\n✅ CSS loading verification PASSED');
  console.log('   All HTML files are configured correctly!');
  process.exit(0);
}

