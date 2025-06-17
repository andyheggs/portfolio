import project1_img from '../assets/Payment_orchestration.svg'
import project2_img from '../assets/Neuropredict.svg'
import project3_img from '../assets/Assetec.svg'
import project4_img from '../assets/Seabay.svg'
import project5_img from '../assets/Crewlink.svg'
import project6_img from '../assets/Snake.svg'

const mywork_data = [
    {
        w_no:1,
        w_name:"ML Fraud Detection",
        w_img:project1_img,
        w_desc: "This Payment Orchestration ML Fraud Monitor commercial pilot showcases the development of machine learning models with Python and XGBoost to detect fraudulent card transactions with high recall on imbalanced datasets, featuring a cloud-agnostic data lake and a “Fraud Lab” built with Google Cloud Vertex AI for secure and scalable experimentation.",
        w_tech: ["Python", "scikit-learn", "XGBoost", "GCP", "Colab", "BigQuery", "Pandas", "NumPy"]
    },
    {
        w_no:2,
        w_name:"ML Tumor Detection",
        w_img:project2_img,
        w_desc: "NeuroPredict is an EEG tumour classifier developed as a team capstone, delivering an end-to-end machine learning pipeline—combining LSTM-Rocket and XGBoost models to achieve 86.4% balanced accuracy—deployed as a containerised API on Google Cloud with a user-facing Streamlit interface for clinical review.",
        w_link: "https://neuropredictor.streamlit.app/",
        w_tech: ["Python", "FastAPI", "TensorFlow","Keras", "Streamlit", "Docker", "Pandas", "NumPy", "Matplotlib", "Colab"]
    },
    {
        w_no:3,
        w_name:"Portfolio Management",
        w_img:project3_img,
        w_desc: "Assetec is a secure, full-stack stock portfolio web app built with React and Django REST, offering real-time valuations, role-based access, and dynamic portfolio analytics, with robust back-end testing and continuous integration, deployed on Heroku and Netlify.",
        w_link: "https://assetec.io/",
        w_tech: [ "React", "Django", "PostgreSQL", "JWT Auth", "REST API"]
    },
    {
        w_no:4,
        w_name:"Marine Marketplace",
        w_img:project4_img,
        w_desc: "SeaBay is a MERN stack online marine marketplace app developed collaboratively, featuring RESTful APIs, JWT authentication, robust database management, responsive design, and modern deployment to Netlify and Heroku, with a strong focus on code organisation, error handling, and end-to-end delivery.",
        w_link: "https://seabayfront.netlify.app/",
        w_tech: ["MongoDB", "Express", "Node", "JWT", "Netlify"]
    },
    {
        w_no:5,
        w_name:"Crew Recruitment Hub",
        w_img:project5_img,
        w_desc: "CrewLink is a MEN stack recruitment manager app for superyacht crew, featuring secure RESTful APIs, JWT-based authentication, and robust access controls, with dynamic EJS views and responsive CSS, fully supporting CRUD operations and deployed as a serverless Node.js application on Netlify.",
        w_link: "https://crewlink.netlify.app/",
        w_tech: [ "MongoDB","Express.js","Node.js","React","Netlify", "Heroku"]
    },
    {
        w_no:6,
        w_name:"Nostalgic Snake Game",
        w_img:project6_img,
        w_desc:"S_N_A_K_E is a modern browser-based remake of the classic Snake game, built with HTML, CSS, and vanilla JavaScript, featuring responsive design, intuitive controls, and a nostalgic aesthetic inspired by the original Nokia version.",
        w_link: "https://andyheggs.github.io/Unit1-Project_-Snake/",
        w_tech: ["JavaScript", "HTML", "CSS"]
    },
]

export default mywork_data;
