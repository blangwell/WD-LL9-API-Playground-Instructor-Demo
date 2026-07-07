/* ============================================================
   COUNTRY EXPLORER — INSTRUCTOR DEMO
   ------------------------------------------------------------
   Live-code Steps 1-6 here with the class. Stop after Step 6
   and hand off to teams for Steps 7-10 (student-starter file).

   THE PATTERN (say this out loud at the end):
     1. Get user input
     2. Fetch data from an API
     3. Convert the response to JSON
     4. Pull the piece of data you need off the response
     5. Drop it into the page with .textContent / .src
   ============================================================ */

// --- Element references (already grabbed for you) -------------
const searchBtn     = document.getElementById('searchBtn');
const countryInput  = document.getElementById('countryInput');
const loadingEl      = document.getElementById('loading');
const errorEl        = document.getElementById('errorMessage');
const resultCard     = document.getElementById('resultCard');

const flagImg        = document.getElementById('flagImg');
const countryNameEl  = document.getElementById('countryName');
const capitalEl      = document.getElementById('capitalValue');
const regionEl       = document.getElementById('regionValue');
const populationEl   = document.getElementById('populationValue');
const languagesEl    = document.getElementById('languagesValue');


/* ------------------------------------------------------------
   STEP 1: Connect the button's click event.
   ------------------------------------------------------------ */



/* ------------------------------------------------------------
   STEP 2: Create fetchCountry()
   ------------------------------------------------------------ */



  /* ------------------------------------------------------------
     STEP 3: Show "Loading..."
     ------------------------------------------------------------ */



  /* ------------------------------------------------------------
     STEP 4: Build the fetch request
     ------------------------------------------------------------
     Endpoint: https://restcountries.com/v3.1/name/{name}?fullText=true
     ------------------------------------------------------------ */



  /* ------------------------------------------------------------
     STEP 5: Convert response -> JSON
     ------------------------------------------------------------ */



  /* ------------------------------------------------------------
     STEP 6: Display ONE property. Start simple.
     Display only: Country Name. Then STOP.

     Say to the class: "Everything else we build today follows
     this exact pattern."
     ------------------------------------------------------------ */



/* ------------------------------------------------------------
   Helper functions — already built for you, use them in Step 3
   and beyond however you like.
   ------------------------------------------------------------ */
function showLoading() {
  loadingEl.classList.remove('hidden');
  errorEl.classList.add('hidden');
  resultCard.classList.add('hidden');
}

function hideLoading() {
  loadingEl.classList.add('hidden');
}


