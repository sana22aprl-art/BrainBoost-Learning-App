// Learn.js - Subject learning page with AI integration

const selectedSubject = localStorage.getItem('selectedSubject');
const selectedClass = localStorage.getItem('selectedClass');

if (selectedSubject && selectedClass) {
    document.getElementById('subjectTitle').textContent = selectedSubject;
    document.getElementById('subjectName').textContent = selectedSubject;
    document.getElementById('subjectDescription').textContent = `Class ${selectedClass} - ${selectedSubject}`;
    document.getElementById('chatSubjectName').textContent = selectedSubject;
} else {
    window.location.href = 'index.html';
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

const generateWorksheetBtn = document.getElementById('generateWorksheetBtn');
const topicInput = document.getElementById('topicInput');
const difficultySelect = document.getElementById('difficultySelect');
const questionsCount = document.getElementById('questionsCount');
const worksheetContent = document.getElementById('worksheetContent');
const worksheetDisplay = document.getElementById('worksheetDisplay');
const downloadWorksheetBtn = document.getElementById('downloadWorksheetBtn');

generateWorksheetBtn.addEventListener('click', generateWorksheet);

async function generateWorksheet() {
    const topic = topicInput.value.trim();
    const difficulty = difficultySelect.value;
    const count = parseInt(questionsCount.value);
    
    if (!topic) {
        alert('Please enter a topic first!');
        return;
    }
    
    generateWorksheetBtn.disabled = true;
    generateWorksheetBtn.innerHTML = '<div class="loading"></div> Generating...';
    
    const worksheet = await createWorksheet(topic, difficulty, count);
    worksheetDisplay.innerHTML = worksheet;
    worksheetContent.style.display = 'block';
    
    generateWorksheetBtn.disabled = false;
    generateWorksheetBtn.innerHTML = '<i class="fas fa-magic"></i> Generate Worksheet';
}

async function createWorksheet(topic, difficulty, count) {
    const date = new Date().toLocaleDateString();
    let html = `<div style="text-align: center; margin-bottom: 2rem; border-bottom: 2px solid var(--primary); padding-bottom: 1rem;">
        <h2 style="color: var(--primary);">${selectedSubject} Worksheet</h2>
        <h3 style="color: var(--gray);">Topic: ${topic}</h3>
        <p>Class ${selectedClass} | Difficulty: ${difficulty.toUpperCase()} | Date: ${date}</p>
    </div><div style="line-height: 2;">`;
    
    const prompt = `Generate ${count} ${difficulty} level educational questions about ${topic} for Class ${selectedClass} ${selectedSubject}. Make questions specific, clear, and appropriate for the grade level. Number them 1 to ${count}.`;
    
    try {
        const aiQuestions = await getAIResponse(prompt);
        const lines = aiQuestions.split('\n').filter(l => l.trim());
        let qNum = 1;
        
        lines.forEach(line => {
            if (line.trim() && (line.match(/^\d+\./) || line.length > 10)) {
                const cleanQ = line.replace(/^Q?\d+[\.\)]\s*/, '');
                if (cleanQ.length > 5) {
                    html += `<div style="margin-bottom: 2rem;"><strong>Q${qNum}.</strong> ${cleanQ}
                    <div style="margin-top: 0.5rem; padding: 1rem; background: #f8fafc; border-left: 3px solid var(--primary); min-height: 60px;">
                        <em>Answer:</em></div></div>`;
                    qNum++;
                    if (qNum > count) return;
                }
            }
        });
        
        while (qNum <= count) {
            const fallbackQ = generateQuestion(selectedSubject, topic, difficulty, qNum);
            html += `<div style="margin-bottom: 2rem;"><strong>Q${qNum}.</strong> ${fallbackQ}
            <div style="margin-top: 0.5rem; padding: 1rem; background: #f8fafc; border-left: 3px solid var(--primary); min-height: 60px;">
                <em>Answer:</em></div></div>`;
            qNum++;
        }
    } catch (error) {
        console.error('AI Error:', error);
        for (let i = 1; i <= count; i++) {
            const q = generateQuestion(selectedSubject, topic, difficulty, i);
            html += `<div style="margin-bottom: 2rem;"><strong>Q${i}.</strong> ${q}
            <div style="margin-top: 0.5rem; padding: 1rem; background: #f8fafc; border-left: 3px solid var(--primary); min-height: 60px;">
                <em>Answer:</em></div></div>`;
        }
    }
    
    html += `</div><div style="margin-top: 3rem; padding-top: 1rem; border-top: 2px solid #e5e7eb; text-align: center; color: var(--gray);">
        <p>Generated by BrainBoost AI</p></div>`;
    return html;
}

function generateQuestion(subject, topic, difficulty, num) {
    const templates = {
        'Mathematics': [
            `Solve: ${getRandomNumber(2,20)} × ${getRandomNumber(2,15)} = ?`,
            `Calculate the area of a rectangle: length ${getRandomNumber(5,20)}cm, width ${getRandomNumber(3,15)}cm.`,
            `Simplify: ${getRandomNumber(10,50)} + ${getRandomNumber(10,50)} - ${getRandomNumber(5,30)}`,
            `Find x: ${getRandomNumber(2,10)}x + ${getRandomNumber(5,20)} = ${getRandomNumber(30,100)}`,
            `Calculate ${getRandomNumber(10,30)}% of ${getRandomNumber(100,500)}.`
        ],
        'Science': [`Explain ${topic} in your own words.`,`List 3 main characteristics of ${topic}.`,`How does ${topic} work? Describe the process.`,`Give 2 real-life examples of ${topic}.`,`What is the importance of ${topic}?`],
        'English': [`Write a paragraph about ${topic} (60 words).`,`Create 5 sentences about ${topic} using different tenses.`,`List 10 words related to ${topic}.`,`Write a short dialogue about ${topic}.`,`Describe ${topic} using adjectives.`],
        'Social Science': [`Explain the significance of ${topic}.`,`What were the main causes of ${topic}?`,`Describe the impact of ${topic} on society.`,`Compare and contrast two aspects of ${topic}.`,`Analyze the role of ${topic} in history/geography.`]
    };
    
    const subjTemplates = templates[subject] || [`Explain ${topic} in detail.`,`What is the importance of ${topic}?`,`Describe the main features of ${topic}.`,`How does ${topic} relate to ${subject}?`,`Give examples of ${topic}.`];
    return subjTemplates[num % subjTemplates.length];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

downloadWorksheetBtn.addEventListener('click', () => {
    const html = worksheetDisplay.innerHTML;
    const blob = new Blob([`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${selectedSubject} Worksheet</title><style>body{font-family:Arial,sans-serif;padding:40px;max-width:800px;margin:0 auto;}h2,h3{color:#6366f1;}</style></head><body>${html}</body></html>`], {type:'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedSubject}_${topicInput.value.replace(/\s+/g,'_')}.html`;
    a.click();
    URL.revokeObjectURL(url);
});

const getExplanationBtn = document.getElementById('getExplanationBtn');
const explanationTopic = document.getElementById('explanationTopic');
const explanationContent = document.getElementById('explanationContent');
const explanationDisplay = document.getElementById('explanationDisplay');

getExplanationBtn.addEventListener('click', generateExplanation);

async function generateExplanation() {
    const topic = explanationTopic.value.trim();
    if (!topic) {
        alert('Please enter a topic first!');
        return;
    }
    
    getExplanationBtn.disabled = true;
    getExplanationBtn.innerHTML = '<div class="loading"></div> Generating...';
    
    const explanation = await createExplanation(topic);
    explanationDisplay.innerHTML = explanation;
    explanationContent.style.display = 'block';
    
    getExplanationBtn.disabled = false;
    getExplanationBtn.innerHTML = '<i class="fas fa-brain"></i> Get Explanation';
}

async function createExplanation(topic) {
    const prompt = `Explain ${topic} in ${selectedSubject} for Class ${selectedClass} students. Include: Definition, 3 key points, detailed explanation with examples, and real-world applications. Be clear and educational.`;
    
    try {
        const aiExplanation = await getAIResponse(prompt);
        return `<div style="line-height:1.8;"><h3 style="color:var(--primary);margin-bottom:1rem;">Understanding: ${topic}</h3>
        <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:20px;border-radius:10px;margin-bottom:1.5rem;">
            <h4 style="margin:0 0 10px 0;color:white;">AI Explanation</h4>
            <div style="white-space:pre-wrap;line-height:1.6;">${aiExplanation}</div>
        </div>
        <div style="background:#eff6ff;padding:20px;border-radius:10px;border-left:4px solid #3b82f6;">
            <h4 style="color:#3b82f6;margin:0 0 10px 0;">Study Tips</h4>
            <ul style="margin:0;padding-left:20px;">
                <li>Create mind maps to connect ${topic} with related concepts</li>
                <li>Practice regularly to reinforce understanding</li>
                <li>Teach someone else to solidify your knowledge</li>
                <li>Use real-world examples to remember better</li>
            </ul>
        </div></div>`;
    } catch (error) {
        return `<div style="line-height:1.8;"><h3 style="color:var(--primary);">Understanding: ${topic}</h3>
        <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:20px;border-radius:10px;margin-bottom:1.5rem;">
            <p>${topic} is an important concept in ${selectedSubject} for Class ${selectedClass}. This topic helps build a strong foundation for understanding more advanced concepts in the subject.</p>
        </div>
        <div style="background:#f8fafc;padding:20px;border-radius:10px;border-left:4px solid #10b981;">
            <h4 style="color:#10b981;">Key Points</h4>
            <ul><li>${topic} is fundamental to ${selectedSubject}</li>
            <li>It has real-world applications</li>
            <li>Understanding this helps with related topics</li>
            <li>This appears frequently in Class ${selectedClass} exams</li></ul>
        </div></div>`;
    }
}

const generatePracticeBtn = document.getElementById('generatePracticeBtn');
const practiceTopic = document.getElementById('practiceTopic');
const questionType = document.getElementById('questionType');
const practiceContent = document.getElementById('practiceContent');
const practiceDisplay = document.getElementById('practiceDisplay');

generatePracticeBtn.addEventListener('click', generatePractice);

async function generatePractice() {
    const topic = practiceTopic.value.trim();
    const type = questionType.value;
    
    if (!topic) {
        alert('Please enter a topic first!');
        return;
    }
    
    generatePracticeBtn.disabled = true;
    generatePracticeBtn.innerHTML = '<div class="loading"></div> Generating...';
    
    const practice = await createPracticeQuestions(topic, type);
    practiceDisplay.innerHTML = practice;
    practiceContent.style.display = 'block';
    
    generatePracticeBtn.disabled = false;
    generatePracticeBtn.innerHTML = '<i class="fas fa-tasks"></i> Generate Questions';
}

async function createPracticeQuestions(topic, type) {
    let html = `<div style="text-align:center;margin-bottom:2rem;border-bottom:2px solid var(--primary);padding-bottom:1rem;">
        <h3 style="color:var(--primary);">Practice Questions - ${topic}</h3>
        <p>Subject: ${selectedSubject} | Class ${selectedClass} | Type: ${type.toUpperCase()}</p></div>`;
    
    if (type === 'mcq' || type === 'mixed') {
        html += '<h4 style="color:var(--primary);margin-top:2rem;">Multiple Choice Questions</h4>';
        const prompt = `Generate 5 multiple choice questions about ${topic} for Class ${selectedClass} ${selectedSubject}. Format each as: Q1. Question?\nA) Option\nB) Option\nC) Option\nD) Option\n\n`;
        
        try {
            const mcq = await getAIResponse(prompt);
            html += `<div style="margin:1.5rem 0;padding:1rem;background:#f8fafc;border-radius:10px;white-space:pre-wrap;">${mcq}</div>`;
        } catch {
            for (let i = 1; i <= 5; i++) {
                html += `<div style="margin:1.5rem 0;padding:1rem;background:#f8fafc;border-radius:10px;">
                    <p style="margin:0 0 10px 0;"><strong>Q${i}.</strong> What is important about ${topic}?</p>
                    <p style="margin:5px 0 5px 20px;">( ) A. Option A</p>
                    <p style="margin:5px 0 5px 20px;">( ) B. Option B</p>
                    <p style="margin:5px 0 5px 20px;">( ) C. Option C</p>
                    <p style="margin:5px 0 5px 20px;">( ) D. Option D</p></div>`;
            }
        }
    }
    
    if (type === 'short' || type === 'mixed') {
        html += '<h4 style="color:var(--primary);margin-top:2rem;">Short Answer Questions</h4>';
        [`Define ${topic}.`,`List 3 features of ${topic}.`,`How does ${topic} apply to ${selectedSubject}?`,`Explain the significance of ${topic}.`,`What are the main components of ${topic}?`].forEach((q, i) => {
            html += `<div style="margin:1.5rem 0;padding:1rem;background:#f8fafc;border-radius:10px;">
                <p style="margin:0 0 10px 0;"><strong>Q${i+1}.</strong> ${q}</p>
                <div style="margin-top:10px;padding:15px;background:white;border-left:3px solid var(--primary);min-height:60px;">
                    <em>Your answer...</em></div></div>`;
        });
    }
    
    if (type === 'long' || type === 'mixed') {
        html += '<h4 style="color:var(--primary);margin-top:2rem;">Long Answer Questions</h4>';
        [`Explain ${topic} in detail with examples.`,`Analyze the importance of ${topic} in ${selectedSubject}.`,`Compare aspects of ${topic} with real-world applications.`].forEach((q, i) => {
            html += `<div style="margin:1.5rem 0;padding:1rem;background:#f8fafc;border-radius:10px;">
                <p style="margin:0 0 10px 0;"><strong>Q${i+1}.</strong> ${q}</p>
                <div style="margin-top:10px;padding:20px;background:white;border-left:3px solid var(--primary);min-height:120px;">
                    <em>Your detailed answer...</em></div></div>`;
        });
    }
    
    return html;
}

const aiChatBtn = document.getElementById('aiChatBtn');
const aiChatModal = document.getElementById('aiChatModal');
const closeChatModal = document.getElementById('closeChatModal');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatContainer = document.getElementById('chatContainer');

if (aiChatBtn) {
    aiChatBtn.addEventListener('click', () => {
        aiChatModal.classList.add('active');
        chatInput.focus();
    });
}

if (closeChatModal) {
    closeChatModal.addEventListener('click', () => {
        aiChatModal.classList.remove('active');
    });
}

if (aiChatModal) {
    aiChatModal.addEventListener('click', (e) => {
        if (e.target === aiChatModal) {
            aiChatModal.classList.remove('active');
        }
    });
}

async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    sendChatBtn.disabled = true;
    sendChatBtn.innerHTML = '<div class="loading"></div>';
    
    try {
        const response = await generateAIResponse(message);
        addChatMessage(response, 'bot');
    } catch (error) {
        addChatMessage('Sorry, I encountered an error. Please try again!', 'bot');
    }
    
    sendChatBtn.disabled = false;
    sendChatBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
}

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
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function generateAIResponse(userMessage) {
    const prompt = `You are a helpful tutor for Class ${selectedClass} ${selectedSubject}. Student asks: "${userMessage}". Provide a clear, encouraging answer for their grade level.`;
    
    try {
        const response = await getAIResponse(prompt);
        return response;
    } catch (error) {
        return `Great question about "${userMessage}"! In ${selectedSubject} for Class ${selectedClass}, this is important. This topic involves key principles fundamental to the subject. I recommend reviewing your textbook and practicing. Would you like me to explain any specific part?`;
    }
}

async function getAIResponse(prompt) {
    try {
        const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                inputs: prompt,
                parameters: {max_new_tokens: 500, temperature: 0.7, top_p: 0.95, return_full_text: false}
            })
        });
        
        if (!response.ok) throw new Error('API failed');
        
        const data = await response.json();
        if (Array.isArray(data) && data[0]?.generated_text) {
            return data[0].generated_text.trim();
        }
        throw new Error('Invalid response');
    } catch (error) {
        console.error('AI Error:', error);
        throw error;
    }
}

if (sendChatBtn) {
    sendChatBtn.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}
