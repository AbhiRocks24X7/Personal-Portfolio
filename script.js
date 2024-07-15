function prog() {
    var txt = document.getElementById("change");
    change.innerHTML = "<h3>Programming Skills</h3><br>" +
        "<b>Languages: </b>C, C++, Python, Matlab, R<br><br>" +
        "<b>C: </b>C language being the most basic language in the current market has helped me to understand the essence of programming. I have done many projects and assignments in C and also have a certification from Itronix Solutions.<br><br>" +
        "<b>C++: </b>This is the language which i have used the most for competitive programming and also learnt concepts like OOP and DSA in it. I have made some of my robust and optimized projects in it and also posses a certificate on internshalaItronix Solutions showcasing the same.<br><br>" +
        "<b>Python: </b>I am also well versed with this language knowing all its basics. Though I am new to libraries such as numpy, pandas, matplotlib and handling csv files, I am striving to learn and bring command over Python.<br><br>" +
        "<b>MATLAB: </b>Learnt all the basic graph making programs in signal and data communication laboratorty(college curriculum).<br><br>" +
        "<b>R: </b>Learnt some basic ML features of this languge in applied probability laboratory(college curriculum).<br>"
}

function webdev() {
    var txt = document.getElementById("change");
    change.innerHTML = "<h3>Web Development Skills</h3><br>" +
        "<b>Languages: </b>HTML, CSS, Javascript, React<br><br>" +
        "<b>HTML: </b>HTML is my first step in the world of web development and I have done many projects in it with some being available on my github profile. With this I have enough knowledge about this language both theoretically and in practice.<br><br>" +
        "<b>CSS: </b>One of the widely used styling languages, there has never been a web page I created without using this. Considering the vastness of the improved versions of CSS and the growing popularity of tailwind CSS, I have gained my confidence in styling any web page.<br><br>" +
        "<b>Javascript: </b>This language is the soul of all my dynamic programs. I actually enjoy using this language as it involves much of coding and javascript is an easy language with loads of functions.<br><br>" +
        "<b>React: </b>Eversince I got my hands on react I have expanded my capability as a web developer. With its new style of creating small components and then merging them, I am now clearer than ever about the concepts of development.<br><br>"
}

// function dbms() {
//     var txt = document.getElementById("change");
//     change.innerHTML = "<h3>Database Management Skills</h3><br>" +
//         "I have learnt and used backend languages for both programming languages and web development.I have learnt the following <b>Languages: </b>MySQL, MongoDB<br><br>" +
//         "<b>MySQL: </b>I have an in-depth knowledge about this language having used it alongside both python and in web development.Also, this being my first introduction to backend has helped me to understand query writing and also the concept of Database Management System.<br><br>" +
//         "<b>MongoDB: </b>I am comparitively new to this language and have learnt it alongwith react to mark the start of my journey towards MERN Stack development.<br>"
// }

// function toth() {
//     var txt = document.getElementById("change");
//     change.innerHTML = "<h3>Other Technical Skills</h3><br>" +
//         "<b>Design: </b>I am well versed about using figma and have also created dummies of some sites in it.<br>" +
//         "I also use a designing platform called canva.<br><br>" +
//         "<b>Tools & Softwares I Use: </b><br>" +
//         "GIT<br>VS Code<br>Jupyter Notebook<br>MS Office<br>XAMPP<br>IDLE<br>StarUML<br>MATLAB<br>RStudio<br>"
// }

function lam() {
    var txt = document.getElementById("change");
    change.innerHTML = "<h3>Leadership and Management Skills</h3><br>" +
        "I have also been a co-member in the Publicity Team of Tecnoesis, the annual technical fect of NIT Silchar where I served my role alongwith overseeing some infra work.<br><br>" +
        "I am looking forward to exhibit my talent as 'Publicity CO-Head' in publiscising events of Tecnoesis in the upcoming technical fest in September.<br><br>" +
        "Apart from that I have even taken part in various event management activities in the events conducted by my college.<br><br>" +
        "I have even volunteered to manage some events in Tecnoesis(annual technical fest of NIT Silchar)."
}

function soc() {
    var txt = document.getElementById("change");
    change.innerHTML = "<h3>Social Skills</h3><br>" +
        "Serving as a core member in Publicity team during Tecnoesis has given a boost to my social skills.<br><br>" +
        "I have learnt to manage a crowd and also learnt to communicate officially with delegates of different companies.<br><br>" +
        "I have also served as an anchor for some events and have also participated in some speeches and debates competitions held in NIT Silchar."
}

function misc() {
    var txt = document.getElementById("change");
    change.innerHTML = "<h3>Miscellaneous Skills</h3><br>" +
        "Incandescence - The cultural fest of our college, has also provided me with the opportunity to learn marketing. I have learnt how to contact companies for sponsorships.<br><br>" +
        "By hobby, I am a musician."
}

function acc() {
    const accContent = `
        <ul class="experience-list">
            <li><button class="experience-btn1" onclick="acc()">Study of Application Softwares</button></li>
            <li></li>
        </ul>
        <div class="expinfo">
            <img class="expimg" src="NALCO-LOGO.jpg">
            <h2>Study of Application softwares</h2><br>
            <h4>Software Intern</h4>
            May 2024 - June 2024<br><br>
            <strong>Study of Application Softwares</strong><br><br>
            <p>
                During my 4-week internship at NALCO, I gained valuable experience with various packages utilized in the company. I learned about advanced techniques such as virtualization and cloud computing. These technologies enhance operational efficiency by enabling resource optimization and scalable infrastructure. Virtualization allows for the creation of virtual environments, improving hardware utilization, while cloud computing offers on-demand access to computing resources and services. This internship provided me with practical insights into modern IT practices and their applications in a corporate setting.
            </p>
        </div>
    `;
    document.getElementById("iel").innerHTML = accContent;
}

function mt() {
    const minfyContent = `
        <ul class="experience-list">
            <li><button class="experience-btn" onclick="acc()">Applied Cloud Computing</button></li>
            <li><button class="experience-btn1" onclick="mt()">MinfyTech</button></li>
        </ul>
        <div class="expinfo">
            <img class="expimg" src="minfy.png">
            <h2>MinfyTech</h2><br>
            <h4>AI/ML Intern</h4>
            May 2024 - July 2024<br><br>
            <strong>Medical Chatbot</strong>

<br><br>
<b>Overview:</b>

<p>This is a Multilingual Medical Chatbot which is designed to provide users with an interactive and accessible platform for obtaining medical information and assistance. Utilizing AWS services, this project ensures scalability, security, and an exceptional user experience, with a focus on supporting multiple languages.</p>
<br>
<b>Key Features</b>

<ul style="margin-left: 20px;">
  <li>Multilingual Support: Offers medical assistance in various languages using AWS Translate.</li>
  <li>Contextually Relevant Responses: Uses advanced models like GPT-3 for understanding and generating responses.</li>
  <li>Medical Information Retrieval: Integrates Retrieval-Augmented Generation (RAG) to fetch relevant medical information.</li>
</ul>
<br>
<b>Technology Stack</b>

<ul style="margin-left: 20px;">
  <li>AWS S3: For storing static assets, user data, and model checkpoints.</li>
  <li>AWS EC2: Hosting backend services and processing user requests.</li>
  <li>AWS Translate: Providing language translation services.</li>
  <li>GPT-3: For natural language understanding and response generation.</li>
  <li>Amazon Comprehend Medical: Extracting medical insights from user inputs.</li>
</ul>
<br>
<p>
  To develop the medical chatbot, created an S3 bucket using the AWS Management Console to store static assets, user data, and model checkpoints. Configured appropriate permissions to ensure secure access to these resources.
  <br>Next, launched an EC2 instance, choosing a suitable AMI and instance type. Configured security groups and network settings for secure communication. Connected to the instance using SSH, installed necessary software like Python, and cloned the project repository. Set up environment variables to ensure smooth operation and secure S3 access.
</p>
<br>
<p>
  Stored datasets, user data, and models in the S3 bucket, leveraging AWS SDKs for efficient access and management. Preprocessed data and utilized Amazon Comprehend Medical to extract insights. Used AWS Translate to support multiple languages, ensuring a broader reach.
  <br>For language understanding and response generation, utilized GPT-3, training and fine-tuning the model as necessary. Deployed the trained models using AWS SageMaker endpoints for real-time inference, enabling the chatbot to provide immediate and accurate responses.
</p>
<br>
<p>
  Continuous maintenance is vital for optimal performance. Employed AWS CloudWatch to monitor the system's health and performance, making necessary updates to models and application code to enhance accuracy and add new features. Implemented strong security measures to protect user data and ensure regulatory compliance.
  <br>This architecture ensures the medical chatbot operates efficiently, offering a reliable and secure user experience with comprehensive multilingual support.
</p>
        </div>
    `;
    document.getElementById("iel").innerHTML = minfyContent;
}