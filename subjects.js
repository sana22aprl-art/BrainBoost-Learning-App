// Subjects.js - Subject browsing page functionality

// Subject configurations based on class
const subjectsByClass = {
    1: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Learn alphabets, words, and basic reading' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Learn Hindi alphabets and basic words' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Numbers, counting, and basic addition' }
    ],
    2: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Reading, writing, and grammar basics' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi reading, writing, and vocabulary' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Addition, subtraction, and number patterns' }
    ],
    3: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Stories, poems, and grammar' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi stories and grammar' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Multiplication, division, and geometry' },
        { name: 'Science', icon: '\u{1F52C}', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Plants, animals, and environment' },
        { name: 'Social Studies', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'Community, environment, and basic geography' },
        { name: 'Computer', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Computer basics and digital literacy' }
    ],
    4: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Advanced reading and composition' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi literature and writing' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Fractions, decimals, and problem solving' },
        { name: 'Science', icon: '\u{1F52C}', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Natural science and experiments' },
        { name: 'Social Studies', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'History, geography, and civics basics' },
        { name: 'Computer', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Computer applications and basics' }
    ],
    5: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Literature and creative writing' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi composition and comprehension' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Advanced arithmetic and geometry' },
        { name: 'Science', icon: '\u{1F52C}', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Life science and physical science' },
        { name: 'Social Studies', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'Indian history, geography, and social systems' },
        { name: 'Computer', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Programming basics and applications' }
    ],
    6: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Grammar, literature, and composition' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi grammar and literature' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Algebra, geometry, and data handling' },
        { name: 'Science', icon: '\u{1F52C}', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Physics, chemistry, and biology basics' },
        { name: 'Social Science', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'History, geography, and civics' },
        { name: 'Computer', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Computer science fundamentals' },
        { name: 'Sanskrit', icon: '\u{1F549}', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', description: 'Sanskrit language and grammar (Optional)' }
    ],
    7: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Advanced grammar and literature' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi prose and poetry' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Integers, equations, and geometry' },
        { name: 'Science', icon: '\u{1F52C}', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Physical and life sciences' },
        { name: 'Social Science', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'History, geography, civics, and economics' },
        { name: 'Computer', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Programming and problem solving' },
        { name: 'Sanskrit', icon: '\u{1F549}', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', description: 'Sanskrit literature (Optional)' }
    ],
    8: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Literature and writing skills' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi literature and composition' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Algebra, mensuration, and statistics' },
        { name: 'Science', icon: '\u{1F52C}', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Physics, chemistry, and biology' },
        { name: 'Social Science', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'History, geography, civics, and economics' },
        { name: 'Computer', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Advanced computer concepts' },
        { name: 'Sanskrit', icon: '\u{1F549}', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', description: 'Sanskrit texts (Optional)' }
    ],
    9: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Advanced literature and writing' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi literature analysis' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Algebra, geometry, and trigonometry' },
        { name: 'Science', icon: '\u{1F52C}', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Detailed physics, chemistry, biology' },
        { name: 'Social Science', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'History, geography, political science, economics' },
        { name: 'Computer', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Programming and algorithms' },
        { name: 'Sanskrit', icon: '\u{1F549}', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', description: 'Advanced Sanskrit (Optional)' }
    ],
    10: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Literature, grammar, and board prep' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi board exam preparation' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Board exam mathematics' },
        { name: 'Science', icon: '\u{1F52C}', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', description: 'Physics, chemistry, biology for boards' },
        { name: 'Social Science', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'History, geography, political science, economics for boards' },
        { name: 'Computer', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Computer applications' },
        { name: 'Sanskrit', icon: '\u{1F549}', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', description: 'Sanskrit for boards (Optional)' }
    ],
    11: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Advanced English literature' },
        { name: 'Physics', icon: '\u{269B}', color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', description: 'Mechanics, thermodynamics, and more' },
        { name: 'Chemistry', icon: '\u{1F9EA}', color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', description: 'Organic, inorganic, and physical chemistry' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Calculus, algebra, and coordinate geometry' },
        { name: 'Biology', icon: '\u{1F9EC}', color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', description: 'Botany and zoology' },
        { name: 'Computer Science', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Programming in C++ and Python' },
        { name: 'History', icon: '\u{1F3DB}', color: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)', description: 'World history and Indian history' },
        { name: 'Political Science', icon: '\u{1F3DB}', color: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)', description: 'Political theory and Indian government' },
        { name: 'Economics', icon: '\u{1F4B8}', color: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)', description: 'Microeconomics and macroeconomics' },
        { name: 'Geography', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'Physical and human geography' },
        { name: 'Business Studies', icon: '\u{1F4BC}', color: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', description: 'Business principles and management' },
        { name: 'Accountancy', icon: '\u{1F4CA}', color: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', description: 'Financial accounting and bookkeeping' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi core' }
    ],
    12: [
        { name: 'English', icon: '\u{1F4DA}', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', description: 'Board exam English preparation' },
        { name: 'Physics', icon: '\u{269B}', color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', description: 'Advanced physics for boards' },
        { name: 'Chemistry', icon: '\u{1F9EA}', color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', description: 'Chemistry board preparation' },
        { name: 'Mathematics', icon: '\u{1F522}', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', description: 'Board exam mathematics' },
        { name: 'Biology', icon: '\u{1F9EC}', color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', description: 'Biology for competitive exams' },
        { name: 'Computer Science', icon: '\u{1F4BB}', color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', description: 'Advanced programming concepts' },
        { name: 'History', icon: '\u{1F3DB}', color: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)', description: 'Modern Indian history and world history' },
        { name: 'Political Science', icon: '\u{1F3DB}', color: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)', description: 'Contemporary world politics' },
        { name: 'Economics', icon: '\u{1F4B8}', color: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)', description: 'Indian economic development' },
        { name: 'Geography', icon: '\u{1F30D}', color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', description: 'Human geography and regional planning' },
        { name: 'Business Studies', icon: '\u{1F4BC}', color: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', description: 'Principles of management and business' },
        { name: 'Accountancy', icon: '\u{1F4CA}', color: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', description: 'Company accounts and financial analysis' },
        { name: 'Hindi', icon: '\u{1F524}', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', description: 'Hindi core for boards' }
    ]
};

// Get selected class from localStorage
const selectedClass = localStorage.getItem('selectedClass');

// Update page with class info
if (selectedClass) {
    document.getElementById('currentClass').textContent = selectedClass;
    loadSubjects(selectedClass);
} else {
    // Redirect to home if no class selected
    window.location.href = 'index.html';
}

// Load subjects based on selected class
function loadSubjects(classNumber) {
    const subjectsGrid = document.getElementById('subjectsGrid');
    const subjects = subjectsByClass[classNumber] || [];
    
    if (subjects.length === 0) {
        subjectsGrid.innerHTML = '<p style="text-align: center; color: var(--gray); grid-column: 1/-1;">No subjects available for this class.</p>';
        return;
    }
    
    subjectsGrid.innerHTML = '';
    
    subjects.forEach((subject, index) => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="subject-icon" style="background: ${subject.color}">
                ${subject.icon}
            </div>
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
        `;
        
        card.addEventListener('click', () => {
            localStorage.setItem('selectedSubject', subject.name);
            window.location.href = 'learn.html';
        });
        
        subjectsGrid.appendChild(card);
    });
}

// Change class button
const changeClassBtn = document.getElementById('changeClassBtn');
if (changeClassBtn) {
    changeClassBtn.addEventListener('click', () => {
        localStorage.removeItem('selectedClass');
        localStorage.removeItem('selectedSubject');
        window.location.href = 'index.html';
    });
}

// AI Chat functionality
const aiChatBtn = document.getElementById('aiChatBtn');
const aiChatModal = document.getElementById('aiChatModal');
const closeChatModal = document.getElementById('closeChatModal');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatContainer = document.getElementById('chatContainer');

// Open chat modal
if (aiChatBtn) {
    aiChatBtn.addEventListener('click', () => {
        aiChatModal.classList.add('active');
        chatInput.focus();
    });
}

// Close chat modal
if (closeChatModal) {
    closeChatModal.addEventListener('click', () => {
        aiChatModal.classList.remove('active');
    });
}

// Close modal when clicking outside
if (aiChatModal) {
    aiChatModal.addEventListener('click', (e) => {
        if (e.target === aiChatModal) {
            aiChatModal.classList.remove('active');
        }
    });
}

// Send chat message
function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Disable send button
    sendChatBtn.disabled = true;
    sendChatBtn.innerHTML = '<div class="loading"></div>';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addChatMessage(response, 'bot');
        sendChatBtn.disabled = false;
        sendChatBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
    }, 1500);
}

// Add message to chat
function addChatMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Generate AI response (simulated)
function generateAIResponse(userMessage) {
    const responses = [
        `Great question about ${userMessage}! Let me help you understand this concept better. In Class ${selectedClass}, this topic is important because it builds foundation for advanced concepts.`,
        `I'd be happy to help with that! This is a common question in Class ${selectedClass}. Let me break it down for you in simple terms.`,
        `Excellent! You're asking about an important topic. For Class ${selectedClass}, understanding this will really help in your exams and future studies.`,
        `That's a smart question! In your current class level, this concept connects to many other topics you'll be learning. Let me explain...`,
        `I can definitely help with that! This is exactly the kind of question that shows you're thinking critically about your studies.`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// Event listeners for chat
if (sendChatBtn) {
    sendChatBtn.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}
