# Automation Testing - Playwright

Repository ini berisikan mengenai hasil automation testing untuk halaman Gercep untuk website 
VC Gamers yang ditujukan sebagai teknikal test QA Engineer Intern. Dalam Projek ini Terdapat Test Case dengan ketentuan sebagai berikut:
1. Open Page & Verify the page has a title
2. Verify Search Bar Interaction
3. Verify Click the result item
Dibawah ini dijelaskan mengenai tata cara penggunaannya. trims :)

## Installation
1. Clone Project
```bash
git clone https://github.com/damiri127/assignmentqa-vcgamers 
```
2. Insert & Open Project
```bash
cd assignmentqa-vcgamers
code .
```
3. Update Dependecies
```bash
npm install
```
4. Install Playwright Browsers
```bash
npx playwright install
```


## Running Test
1. Running All Test
```bash
npx playwright test
```
2. Running Specific Test
```bash
npx playwright test <test file name>
```
3. Running Test With UI
```bash
npx playwright test --ui
```
4. Running Test With Report (HTML)
```bash
npx playwright show-report
```

## Notes
- Test sudah menggunakan semantic locators seperti getByRole, getByPlaceHolder supaya lebih stabil
- Terdapat penggunaan timeout untuk memastikan halaman sudah berubah
- Test Belum menggunakan konsep Page Object Model (POM)