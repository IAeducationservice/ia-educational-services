let chosen12thStream = '';
let selectedScoreType = 'Marks';
let activeChosenTrack = '';
let currentScreenStage = '';
let chosenItiPathway = '';
let chosenDiplomaPathway = 'B.Tech Direct 2nd Year';
let currentActiveUserScore = 75;

// DYNAMIC EXAM DATA BASED ON STRICT STREAM ELIGIBILITY
const examOptionsMap = {
    'Science PCM': [
        "JEE Main (Engineering & Arch)",
        "MHT-CET / State CET (Engineering & Pharmacy)",
        "NATA (Architecture)",
        "NDA (National Defence Academy)",
        "CLAT / Law Entrance (Law)",
        "CA Foundation (Chartered Accountancy)",
        "IPMAT / JIPMAT (Management BBA-MBA)",
        "NIFT / NID (Design)",
        "CUET (Central Universities)",
        "UPSC Foundation / Civil Services Prep",
        "Direct Board Marks (12th PCM)"
    ],
    'Science PCB': [
        "NEET (MBBS, BDS, BAMS, BHMS)",
        "Nursing & Paramedical Entrance",
        "State Pharmacy Entrance (B.Pharm)",
        "CLAT / Law Entrance (Law)",
        "CA Foundation (Chartered Accountancy)",
        "IPMAT / JIPMAT (Management)",
        "NIFT / NID (Design)",
        "CUET (Central Universities)",
        "UPSC Foundation / Civil Services Prep",
        "Direct Board Marks (12th PCB)"
    ],
    'Commerce': [
        "CA Foundation (Chartered Accountancy)",
        "CSEET (Company Secretary)",
        "IPMAT / JIPMAT (Management BBA-MBA)",
        "CLAT / Law Entrance (Law)",
        "NIFT / NID (Design)",
        "CUET (Commerce & Economics)",
        "UPSC Foundation / Civil Services Prep",
        "Direct Board Marks (12th Commerce)"
    ],
    'Arts': [
        "CLAT / Law Entrance (5-Yr Integrated Law)",
        "NIFT / NID (Fashion & UX Design)",
        "NCHMCT JEE (Hotel Management)",
        "CUET (Arts, Humanities & Media)",
        "UPSC Foundation / Civil Services Prep",
        "Direct Board Marks (12th Arts)"
    ]
};

// MOCK GLOBAL COLLEGE DATABASE (INCLUDES DIPLOMA & HIGHER DEGREE TARGETS)
const collegeDatabase = [
    { name: "COEP Technological University (Lateral Entry)", location: "Maharashtra", rating: 5, minCutoff: 90, stream: "Diploma", pathway: "B.Tech Direct 2nd Year", mode: "Direct Merit" },
    { name: "VJTI Mumbai (Direct Second Year B.Tech)", location: "Maharashtra", rating: 5, minCutoff: 92, stream: "Diploma", pathway: "B.Tech Direct 2nd Year", mode: "Direct Merit" },
    { name: "MIT World Peace University (DSE Engineering)", location: "Maharashtra", rating: 4, minCutoff: 72, stream: "Diploma", pathway: "B.Tech Direct 2nd Year", mode: "Direct Merit" },
    { name: "Lovely Professional University (LPU Direct B.Tech / B.Des)", location: "National", rating: 4, minCutoff: 60, stream: "Diploma", pathway: "B.Tech Direct 2nd Year", mode: "Direct Merit" },
    { name: "Chandigarh University (Lateral Entry B.Tech / BCA)", location: "National", rating: 4, minCutoff: 60, stream: "Diploma", pathway: "B.Tech Direct 2nd Year", mode: "Direct Merit" },
    { name: "DTU / NSUT Delhi (LEET Entrance)", location: "National", rating: 5, minCutoff: 80, stream: "Diploma", pathway: "B.Tech Direct 2nd Year", mode: "Entrance Exam" },
    { name: "National Institute of Design (NID - B.Des)", location: "National", rating: 5, minCutoff: 75, stream: "Diploma", pathway: "B.Des (Bachelor of Design)", mode: "Entrance Exam" },
    { name: "Symbiosis Institute of Design (B.Des)", location: "National", rating: 4, minCutoff: 65, stream: "Diploma", pathway: "B.Des (Bachelor of Design)", mode: "Direct Merit" },
    { name: "Tata Institute of Social Sciences (B.Voc Degree)", location: "Maharashtra", rating: 5, minCutoff: 60, stream: "Diploma", pathway: "B.Voc (Skill Degree)", mode: "Direct Merit" },
    { name: "Government Skill University (B.Voc Technical)", location: "Maharashtra", rating: 4, minCutoff: 55, stream: "Diploma", pathway: "B.Voc (Skill Degree)", mode: "Direct Merit" },
    { name: "Christ University (BCA / B.Sc IT Direct)", location: "National", rating: 5, minCutoff: 70, stream: "Diploma", pathway: "BCA / B.Sc IT", mode: "Direct Merit" },
    { name: "NMIMS School of Commerce / Management (BBA)", location: "Maharashtra", rating: 5, minCutoff: 75, stream: "Diploma", pathway: "BBA / BMS (Management)", mode: "Entrance Exam" },
    { name: "Public Sector Technical Placement / SSC JE Portal", location: "National", rating: 5, minCutoff: 50, stream: "Diploma", pathway: "Government / Job Exams", mode: "Direct Merit" },
    
    // 12th & ITI Standard Mappings
    { name: "COEP Technological University", location: "Maharashtra", rating: 5, minCutoff: 90, stream: "Science PCM", pathway: "All", mode: "Entrance Exam" },
    { name: "ICT Mumbai (Institute of Chemical Technology)", location: "Maharashtra", rating: 5, minCutoff: 92, stream: "Science PCM", pathway: "All", mode: "Entrance Exam" },
    { name: "Government Medical College (GMC)", location: "Maharashtra", rating: 5, minCutoff: 95, stream: "Science PCB", pathway: "All", mode: "Entrance Exam" },
    { name: "ILS Law College", location: "Maharashtra", rating: 5, minCutoff: 88, stream: "All", pathway: "All", mode: "Entrance Exam" },
    { name: "Mit Academy of Engineering", location: "Maharashtra", rating: 4, minCutoff: 75, stream: "Science PCM", pathway: "All", mode: "Entrance Exam" },
    { name: "BITS Pilani", location: "National", rating: 5, minCutoff: 88, stream: "Science PCM", pathway: "All", mode: "Entrance Exam" },
    { name: "Government Polytechnic College", location: "Maharashtra", rating: 4, minCutoff: 70, stream: "ITI / Diploma", pathway: "All", mode: "Direct Merit" },
    { name: "National Skill Training Institute (NSTI)", location: "National", rating: 5, minCutoff: 65, stream: "ITI / Diploma", pathway: "All", mode: "Direct Merit" },
    { name: "Regional Polytechnic & Direct Institute", location: "Maharashtra", rating: 3, minCutoff: 40, stream: "All", pathway: "All", mode: "Direct Merit" }
];

function hideAllScreens() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('details-screen-10th').style.display = 'none';
    document.getElementById('details-screen-12th').style.display = 'none';
    document.getElementById('details-screen-iti').style.display = 'none';
    document.getElementById('details-screen-diploma').style.display = 'none';
    document.getElementById('college-results-screen').style.display = 'none';
    document.getElementById('apply-screen').style.display = 'none';
}

function goToHomeScreen() {
    hideAllScreens();
    document.getElementById('home-screen').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openScreen2(stage) {
    hideAllScreens();
    currentScreenStage = stage;
    if (stage === '10th') {
        document.getElementById('details-screen-10th').style.display = 'block';
    } else if (stage === '12th') {
        document.getElementById('details-screen-12th').style.display = 'block';
    } else if (stage === 'ITI') {
        document.getElementById('details-screen-iti').style.display = 'block';
    } else if (stage === 'Diploma') {
        document.getElementById('details-screen-diploma').style.display = 'block';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBackToPreviousScreen() {
    if (currentScreenStage) {
        openScreen2(currentScreenStage);
    } else {
        goToHomeScreen();
    }
}

/* 10TH LOGIC */
function check10thMarksEligibility() {
    const marksInput = document.getElementById('user-10th-marks').value;
    const statusDiv = document.getElementById('eligibility-status-10th');
    
    if (!marksInput || marksInput < 1 || marksInput > 100) {
        alert('Please enter a valid percentage between 1 and 100.');
        return;
    }

    const marks = parseFloat(marksInput);
    statusDiv.style.display = 'block';

    if (marks >= 35) {
        statusDiv.className = 'eligibility-status-msg pass';
        statusDiv.innerText = `Eligible Status: Qualified (${marks}%)! You meet standard pass requirements for CAP admissions across streams below.`;
    } else {
        statusDiv.className = 'eligibility-status-msg fail';
        statusDiv.innerHTML = `
            You have scored below the standard passing percentage (${marks}%). Standard CAP round admissions require a pass status, but you still have skill & re-examination options!<br>
            <a href="https://wa.me/919822206864?text=Hello%20Counselor,%20I%20scored%20${marks}%%20in%2010th.%20Please%20guide%20me%20on%20my%20available%20options." target="_blank" class="counselor-fail-btn">
                <i class="fa-brands fa-whatsapp"></i> Talk to Counselor for Guidance
            </a>
        `;
    }
}

function toggleAccordion(headerElement) {
    const item = headerElement.parentElement;
    const content = item.querySelector('.accordion-content');
    const isOpen = item.classList.contains('active');
    
    document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
        acc.querySelector('.accordion-content').style.display = 'none';
    });

    if (!isOpen) {
        item.classList.add('active');
        content.style.display = 'block';
    }
}

/* 12TH LOGIC */
function select12thStream(streamKey, cardElement) {
    chosen12thStream = streamKey;
    document.querySelectorAll('#details-screen-12th .stream-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');

    const examSelect = document.getElementById('exam-selector');
    examSelect.innerHTML = '';

    const exams = examOptionsMap[streamKey] || [];
    exams.forEach(ex => {
        const opt = document.createElement('option');
        opt.value = ex;
        opt.innerText = ex;
        examSelect.appendChild(opt);
    });
}

function setScoreType(type) {
    selectedScoreType = type;
    document.getElementById('toggle-marks').classList.toggle('active', type === 'Marks');
    document.getElementById('toggle-percentile').classList.toggle('active', type === 'Percentile');
    document.getElementById('user-score-val').placeholder = `Enter ${type} e.g. 85.5`;
}

function checkEligibleColleges12th() {
    if (!chosen12thStream) {
        alert('Please select your qualified 12th stream first.');
        return;
    }

    const scoreVal = parseFloat(document.getElementById('user-score-val').value);
    if (!scoreVal || scoreVal < 1 || scoreVal > 100) {
        alert('Please enter a valid numerical score between 1 and 100.');
        return;
    }

    activeChosenTrack = chosen12thStream;
    currentActiveUserScore = scoreVal;
    hideAllScreens();
    document.getElementById('college-results-screen').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    renderCollegeGrid(scoreVal);
}

/* ITI LOGIC */
function handleItiTradeSelection(tradeName) {
    const infoMsg = document.getElementById('trade-info-msg');
    const selector = document.getElementById('iti-trade-selector');
    const selectedOpt = selector.options[selector.selectedIndex];
    const duration = selectedOpt.getAttribute('data-duration');

    if (!tradeName) {
        infoMsg.style.display = 'none';
        return;
    }

    infoMsg.style.display = 'block';
    if (duration === "2") {
        infoMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>2-Year NCVT/SCVT Trade Recognized:</strong> Eligible for Direct 2nd-Year Polytechnic Diploma (Lateral Entry), CITS, and Advanced Diplomas.`;
    } else if (duration === "1") {
        infoMsg.innerHTML = `<i class="fa-solid fa-circle-info"></i> <strong>1-Year Trade Recognized:</strong> Directly eligible for CITS & Advanced Certifications. <em>Note: Direct 2nd-year Diploma Lateral entry generally requires 2-year trades under AICTE guidelines.</em>`;
    } else {
        infoMsg.innerHTML = `<i class="fa-solid fa-circle-info"></i> Trade selected. Choose your target further education pathway below.`;
    }
}

function selectItiPathway(pathwayName, cardElement) {
    chosenItiPathway = pathwayName;
    document.querySelectorAll('#details-screen-iti .stream-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');

    const examGroup = document.getElementById('cits-exam-group');
    if (pathwayName.includes('CITS')) {
        examGroup.style.display = 'block';
        document.getElementById('iti-marks-label').innerText = "4. Enter Your Aggregate ITI Percentage (%)";
    } else {
        examGroup.style.display = 'none';
        document.getElementById('iti-marks-label').innerText = "3. Enter Your Aggregate ITI Percentage (%)";
    }
}

function checkEligibleCollegesIti() {
    const trade = document.getElementById('iti-trade-selector').value;
    if (!trade) {
        alert('Please select your completed ITI Trade.');
        return;
    }
    if (!chosenItiPathway) {
        alert('Please select your desired target further education track.');
        return;
    }

    const itiMarks = parseFloat(document.getElementById('user-iti-marks').value);
    if (!itiMarks || itiMarks < 1 || itiMarks > 100) {
        alert('Please enter a valid ITI Percentage between 1 and 100.');
        return;
    }

    activeChosenTrack = `ITI ${trade} -> ${chosenItiPathway}`;
    currentActiveUserScore = itiMarks;
    hideAllScreens();
    document.getElementById('college-results-screen').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    renderCollegeGrid(itiMarks);
}

/* POLYTECHNIC DIPLOMA LOGIC */
function selectDiplomaPathway(pathwayName, cardElement) {
    chosenDiplomaPathway = pathwayName;
    document.querySelectorAll('#details-screen-diploma .stream-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
}

function handleDiplomaBranchChange(branchName) {
    // Auto preset standard suggested pathways based on branch
    const bdesCard = document.getElementById('dip-path-bdes');
    const bcaCard = document.getElementById('dip-path-bca');
    if (branchName.includes('Interior') || branchName.includes('Fashion')) {
        selectDiplomaPathway('B.Des (Bachelor of Design)', bdesCard);
    } else if (branchName.includes('Computer Science')) {
        selectDiplomaPathway('B.Tech Direct 2nd Year', document.getElementById('dip-path-btech'));
    }
}

function handleDiplomaExamStatusChange(statusVal) {
    const scoreGroup = document.getElementById('diploma-exam-score-group');
    if (statusVal === 'Direct Merit') {
        scoreGroup.style.display = 'none';
    } else {
        scoreGroup.style.display = 'block';
        document.getElementById('diploma-exam-score-label').innerText = `Enter Score / Percentile for ${statusVal}`;
    }
}

function checkEligibleCollegesDiploma() {
    const branch = document.getElementById('diploma-branch-selector').value;
    if (!branch) {
        alert('Please select your completed Diploma Branch.');
        return;
    }

    const marks = parseFloat(document.getElementById('user-diploma-marks').value);
    if (!marks || marks < 1 || marks > 100) {
        alert('Please enter a valid aggregate percentage or CGPA equivalent.');
        return;
    }

    activeChosenTrack = `Diploma in ${branch} -> ${chosenDiplomaPathway}`;
    currentActiveUserScore = marks;
    hideAllScreens();
    document.getElementById('college-results-screen').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    renderCollegeGrid(marks);
}

/* SCREEN 3 RESULTS & FILTERS */
function toggleFilterDrawer() {
    const drawer = document.getElementById('filter-drawer');
    drawer.classList.toggle('active');
}

function renderCollegeGrid(userScore) {
    const gridContainer = document.getElementById('college-grid-container');
    gridContainer.innerHTML = '';

    const locFilter = document.getElementById('filter-location').value;
    const ratFilter = document.getElementById('filter-rating').value;
    const modeFilter = document.getElementById('filter-mode').value;

    const filtered = collegeDatabase.filter(col => {
        const locMatch = (locFilter === 'All' || col.location === locFilter);
        const ratMatch = (ratFilter === 'All' || col.rating == ratFilter);
        const modeMatch = (modeFilter === 'All' || col.mode === modeFilter);
        
        let streamMatch = false;
        if (currentScreenStage === 'Diploma') {
            streamMatch = (col.stream === 'Diploma' || col.stream === 'All') && 
                          (col.pathway === 'All' || col.pathway === chosenDiplomaPathway);
        } else if (currentScreenStage === '12th') {
            streamMatch = (col.stream === 'All' || col.stream === chosen12thStream);
        } else {
            streamMatch = (col.stream === 'All' || col.stream === 'ITI / Diploma');
        }

        return locMatch && ratMatch && modeMatch && streamMatch;
    });

    if (filtered.length === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-sub); padding: 30px;">No exact colleges found matching all filter criteria. Try adjusting your location or tier rating filters.</p>`;
        return;
    }

    filtered.forEach(col => {
        const isHighChance = userScore >= col.minCutoff;
        const badgeText = isHighChance ? 'High Allotment Chance' : 'Competitive Cutoff Match';
        const badgeColor = isHighChance ? 'background: rgba(37, 211, 102, 0.1); color: #15803d;' : 'background: rgba(217, 119, 6, 0.1); color: #b45309;';

        const cardHtml = `
            <div class="college-card">
                <div>
                    <div class="college-card-top">
                        <h3>${col.name}</h3>
                        <span class="star-rating"><i class="fa-solid fa-star"></i> ${col.rating}.0</span>
                    </div>
                    <div class="college-location"><i class="fa-solid fa-location-dot"></i> ${col.location} • <small style="color:var(--accent-cyan); font-weight:600;">${col.mode || 'Direct Merit'}</small></div>
                    <br>
                    <span class="match-badge" style="${badgeColor}">${badgeText} (Min Cutoff ~${col.minCutoff}%)</span>
                </div>
                <button class="college-apply-btn" onclick="selectCollegeForApplication('${col.name}')">
                    Apply via CAP / Direct Allotment
                </button>
            </div>
        `;
        gridContainer.innerHTML += cardHtml;
    });
}

function applyCollegeFilters() {
    renderCollegeGrid(currentActiveUserScore);
}

function selectCollegeForApplication(collegeName) {
    hideAllScreens();
    document.getElementById('apply-screen').style.display = 'block';
    document.getElementById('target-college').value = collegeName;
    document.getElementById('selected-track-badge').innerHTML = `<i class="fa-solid fa-paper-plane"></i> Track: ${activeChosenTrack || 'Technical Track'}`;
    document.getElementById('apply-heading').innerText = `Apply to ${collegeName}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToApplyScreen(trackName) {
    activeChosenTrack = trackName;
    hideAllScreens();
    document.getElementById('apply-screen').style.display = 'block';
    document.getElementById('selected-track-badge').innerHTML = `<i class="fa-solid fa-paper-plane"></i> Track: ${trackName}`;
    document.getElementById('apply-heading').innerText = `Apply for ${trackName}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleFinalFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('student-name').value;
    const phone = document.getElementById('student-phone').value;
    const location = document.getElementById('target-location').value;
    const college = document.getElementById('target-college').value || 'Not Specified';

    const message = `Hello IA Educational Services,\n\nI have submitted an application via the portal:\n- Student Name: ${name}\n- Contact: ${phone}\n- Track/Stream: *${activeChosenTrack}*\n- Preferred Location: ${location}\n- Target College: ${college}\n\nI have uploaded my marksheet. Please confirm my seat allotment process.`;

    window.open(`https://wa.me/919822206864?text=${encodeURIComponent(message)}`, '_blank');
}
