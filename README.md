<h1>SymbiNav 🚀</h1>
<h2><a href="https://symbinav.web.app">🌐 Live here
</a></h2>
<p><strong>SymbiNav</strong> is a dynamic web application designed to help students manage their academic schedules effectively. It displays real-time updates for the next class, faculty details, and class locations, all while ensuring accessibility and ease of use.</p>

<h2>📋 Features</h2>
<ul>
  <li>⏰ <strong>Dynamic Scheduling:</strong> Displays the next class, location, and faculty dynamically based on the selected branch and section.</li>
  <li>📰 <strong>Real-Time News Updates:</strong> Admins can update marquee news via a modal, and changes persist across all devices using Firestore.</li>
  <li>🔥 <strong>Firebase Integration:</strong> Uses Firebase Firestore for real-time database management and Firebase Hosting for deployment.</li>
  <li>🎨 <strong>Modern UI:</strong> A clean, responsive design with gradient-based themes and Font Awesome icons.</li>
</ul>

<h2>🚀 Technologies Used</h2>
<ul>
  <li><strong>Frontend:</strong> HTML5, CSS3 (Flexbox & Grid), JavaScript (ES6 Modules)</li>
  <li><strong>Backend:</strong> Firebase Hosting and Firestore Database</li>
  <li><strong>Libraries:</strong> Font Awesome (icons)</li>
</ul>

<h2>🖥️ Responsive Design</h2>
<p>The application is fully responsive and optimized for:</p>
<ul>
  <li><strong>Desktops:</strong> Full functionality with enhanced UI.</li>
  <li><strong>Mobile Devices:</strong> Adaptive layout for a smooth experience.</li>
</ul>

<h2>🛠️ Setup and Usage</h2>
<ol>
  <li><strong>Clone the repository:</strong>
    <pre><code>git clone https://github.com/your-username/symbinav.git
cd symbinav</code></pre>
  </li>
  <li><strong>Set up Firebase:</strong>
    <p>Create a Firebase project and add your web app. Replace the placeholders in the <code>firebaseConfig</code> object in the JavaScript file with your Firebase project details:</p>
    <pre><code>const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};</code></pre>
  </li>
  <li><strong>Install Firebase CLI:</strong>
    <pre><code>npm install -g firebase-tools</code></pre>
  </li>
  <li><strong>Deploy the app:</strong>
    <pre><code>firebase init
firebase deploy</code></pre>
  </li>
</ol>

<h2>📂 Project Structure</h2>
<pre><code>
├── public/
│   ├── index.html          # Main HTML file
│   ├── script.js           # Core JavaScript functionality
│   ├── style.css           # Styling
├── firebase.json           # Firebase configuration
├── .firebaserc             # Firebase project aliases
└── README.md               # Project documentation
</code></pre>



<h2>📋 Usage Instructions</h2>
<ol>
  <li>Open the app and select your <strong>branch</strong> and <strong>section</strong> using the interface.</li>
  <li>The next class, location, and faculty details will be displayed dynamically.</li>
  <li>Admins can update the news marquee via the modal and store it in Firestore for real-time updates.</li>
</ol>

<h2>📜 License</h2>
<p>This project is licensed under the <strong>MIT License</strong>.</p>

<h2>📧 Contact</h2>
<p>Developed by <strong>Dewashish Lambore</strong>.</p>
<ul>
  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dewashish-lambore">Dewashish Lambore</a></li>
  <li><strong>GitHub:</strong> <a href="https://github.com/dewashish-lambore">Dewashish Lambore</a></li>
</ul>

