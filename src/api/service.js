import dvImgS1 from '../images/service-single/development/img-1.jpg'
import dvImgS2 from '../images/service-single/development/img-2.jpg'
import dvImgS3 from '../images/service-single/development/img-3.jpg'

import adImgS1 from '../images/service-single/app/img-1.jpg'
import adImgS2 from '../images/service-single/app/img-2.jpg'
import adImgS3 from '../images/service-single/app/img-3.jpg'

import swImgS1 from '../images/service-single/softwere/img-1.jpg'
import swImgS2 from '../images/service-single/softwere/img-2.jpg'
import swImgS3 from '../images/service-single/softwere/img-3.jpg'

import awsImgS1 from '../images/service-single/aws/img-1.jpg'
import awsImgS2 from '../images/service-single/aws/img-2.jpg'
import awsImgS3 from '../images/service-single/aws/img-3.jpg'

import psImgS1 from '../images/service-single/ps/img-1.jpg'
import psImgS2 from '../images/service-single/ps/img-2.jpg'
import psImgS3 from '../images/service-single/ps/img-3.jpg'

const Services = [
    {
        Id: '1',
        sImgS: dvImgS1,
        sTitle: 'Web Development',
        description: 'I build responsive, user-friendly websites with seamless functionality to elevate your business online.',
        des1: 'I specialize in backend development, crafting robust, scalable, and high-performance web applications. This includes designing server-side architectures, managing databases, developing secure APIs, and optimizing for security. While not my primary focus, I ensure seamless frontend integration for a complete web solution, meeting functional and performance needs.',
        des2: 'My expertise is in building resilient backend systems, the foundation of modern digital experiences. I design server architectures for high traffic and evolving needs, prioritizing performance and reliability. I manage databases, designing schemas, optimizing queries, and ensuring data integrity. I develop secure APIs for seamless communication and integration. Security is paramount, with robust measures to protect data. I ensure harmonious frontend integration. My commitment to clean, tested code, using industry-standard tools, ensures reliable systems. I\'m driven by complex challenges and continuous learning, staying at the forefront of backend best practices to deliver powerful and secure solutions.',
        des3: 'I excel in crafting well-documented and secure APIs, facilitating seamless communication between diverse components and enabling integration with various platforms and services. Security optimization is paramount in my approach, implementing best practices and rigorous measures to safeguard sensitive data and protect against potential vulnerabilities. While my primary focus is the server-side, I maintain a strong understanding of frontend principles to ensure smooth and efficient integration with user interfaces, guaranteeing a cohesive and functional end-to-end web solution. I am committed to writing clean, maintainable, and well-tested code, employing industry-standard methodologies and tools to deliver reliable and high-quality backend systems. I am passionate about solving complex technical challenges and continuously expanding my knowledge to stay at the forefront of backend development best practices.',
        capabilities: {
            desc: "I offer a wide range of backend development services to power efficient and secure web applications:",
            points: [
                "Scalable and secure backend architecture.",
                "API development and integration.",
                "Database design, optimization, and management.",
                "Server-side logic implementation and performance tuning.",
                "Authentication, authorization, and security best practices."
            ]
        },
        approch: "I take a structured and performance-driven approach to backend development. Every project begins with understanding your business needs and crafting efficient server-side logic to ensure scalability and security. My focus is on delivering clean, maintainable code and seamless integration with frontend systems.",
        process: [
            "Understanding your project goals and backend requirements.",
            "Designing a scalable and efficient server architecture.",
            "Developing APIs and database structures tailored to your needs.",
            "Ensuring performance, security, and seamless integration.",
            "Deploying and maintaining the backend for long-term stability."
        ],
        icon: 'flaticon-coding',
        ssImg1: dvImgS2,
        ssImg2: dvImgS3,
    },{
        Id: "2",
        sImgS: adImgS1,
        sTitle: "App Development",
        description: "I build robust and scalable backend systems to power seamless and high-performance mobile applications.",
        des1: "I specialize in backend development for mobile applications, crafting robust, scalable, and high-performance systems. This involves designing server-side architectures, managing databases, developing secure APIs, and optimizing for security. While not my primary focus, I ensure seamless integration with mobile frontends, meeting functional and performance needs.",
        des2: "My expertise is in building resilient backend systems, the foundation of modern mobile experiences. I design server architectures for high traffic and evolving app needs, prioritizing performance and reliability. I manage databases, designing schemas, optimizing queries, and ensuring data integrity. I develop secure APIs for seamless communication and integration. Security is paramount, with robust measures to protect data. I ensure harmonious mobile frontend integration. My commitment to clean, tested code, using industry-standard tools, ensures reliable systems. I'm driven by complex challenges and continuous learning, staying at the forefront of backend best practices to deliver powerful and secure mobile solutions.",
        des3: "I excel in crafting well-documented and secure APIs, facilitating seamless communication between mobile applications and backend services. Security optimization is paramount, with best practices and rigorous measures to safeguard sensitive mobile data. While my primary focus is the server-side, I ensure smooth integration with mobile frontends for a cohesive and functional application. I am committed to writing clean, maintainable, and well-tested code, employing industry-standard methodologies and tools to deliver reliable and high-quality backend systems. I am passionate about solving complex technical challenges and continuously expanding my knowledge to stay at the forefront of mobile backend development best practices.",
        capabilities: {
            desc: "I offer a comprehensive range of backend development services to power efficient and secure mobile applications:",
            points: [
                "Scalable and secure backend architecture for mobile apps.",
                "API development and integration for seamless mobile communication.",
                "Database design, optimization, and management tailored for mobile data needs.",
                "Server-side logic implementation and performance tuning for mobile app responsiveness.",
                "Authentication, authorization, and security best practices for mobile app data protection."
            ]
        },
        approch: "I adopt a structured and performance-driven approach to backend development for mobile applications. Every project starts with a thorough understanding of your app’s requirements and user needs, followed by the development of efficient server-side logic to ensure scalability, security, and optimal performance. My focus is on delivering clean, maintainable code and seamless integration with mobile frontend systems, resulting in a cohesive user experience.",
        process: [
            "Understanding your app’s goals and backend requirements.",
            "Designing a scalable and efficient server architecture for mobile functionality.",
            "Developing APIs and database structures optimized for mobile data access and usage.",
            "Ensuring performance, security, and seamless integration with mobile platforms.",
            "Deploying and maintaining the backend for long-term app stability and reliability."
        ],
        icon: "flaticon-app-development",
        ssImg1: adImgS2,
        ssImg2: adImgS3
    },
    {
        Id: "3",
        sImgS: swImgS1,
        sTitle: "Software Development",
        description: "I build robust, scalable, and high-performance software solutions tailored to your business needs.",
        des1: "I specialize in backend development for software applications, crafting robust, scalable, and high-performance systems. This involves designing server-side architectures, managing databases, developing secure APIs, and optimizing for security. While not focusing on specific UI, I ensure seamless integration with various software interfaces, meeting functional and performance needs.",
        des2: "My expertise is in building resilient backend systems, the foundation of modern software applications. I design server architectures for high workloads and evolving application needs, prioritizing performance and reliability. I manage databases, designing schemas, optimizing queries, and ensuring data integrity. I develop secure APIs for seamless communication and integration. Security is paramount, with robust measures to protect data. I ensure harmonious integration with software interfaces. My commitment to clean, tested code, using industry-standard tools, ensures reliable systems. I'm driven by complex challenges and continuous learning, staying at the forefront of backend best practices to deliver powerful and secure software solutions.",
        des3: "I excel in crafting well-documented and secure APIs, facilitating seamless communication between software components and backend services. Security optimization is paramount, with best practices and rigorous measures to safeguard sensitive software data. While my primary focus is the server-side, I ensure smooth integration with diverse software interfaces for a cohesive and functional application. I am committed to writing clean, maintainable, and well-tested code, employing industry-standard methodologies and tools to deliver reliable and high-quality backend systems. I am passionate about solving complex technical challenges and continuously expanding my knowledge to stay at the forefront of software backend development best practices.",
        capabilities: {
            desc: "I offer a comprehensive range of backend development services to power efficient and secure software applications:",
            points: [
                "Scalable and secure backend architecture for software applications.",
                "API development and integration for seamless software communication.",
                "Database design, optimization, and management tailored for software data needs.",
                "Server-side logic implementation and performance tuning for software responsiveness.",
                "Authentication, authorization, and security best practices for software data protection."
            ]
        },
        approch: "I adopt a structured and performance-driven approach to backend development for software applications. Every project starts with a thorough understanding of your software requirements and business needs, followed by the development of efficient server-side logic to ensure scalability, security, and optimal performance. My focus is on delivering clean, maintainable code and seamless integration with software interfaces, resulting in a cohesive application experience.",
        process: [
            "Understanding your software goals and backend requirements.",
            "Designing a scalable and efficient server architecture for software functionality.",
            "Developing APIs and database structures optimized for software data access and usage.",
            "Ensuring performance, security, and seamless integration with software interfaces.",
            "Deploying and maintaining the backend for long-term software stability and reliability."
        ],
        icon: "flaticon-software-developer",
        ssImg1: swImgS2,
        ssImg2: swImgS3
    },
    {
        Id: "4",
        sImgS: awsImgS1,
        sTitle: "Amazon Web Services & DevOps",
        description: "I provide robust and efficient AWS deployment and DevOps solutions, ensuring scalable and secure cloud infrastructure.",
        des1: "I specialize in AWS deployment and DevOps, building robust, scalable, and high-performance cloud infrastructures. This includes designing and implementing EC2 instances, managing Route53 DNS, utilizing S3 storage, deploying with Amplify, securing with AWS WAF and Cognito, and optimizing with AWS Load Balancers (ALB, NLB, CLB). I ensure seamless deployment and operational efficiency.",
        des2: "My expertise lies in crafting resilient and adaptable AWS environments, the foundation of modern cloud-based applications. I design scalable EC2 architectures, manage complex Route53 configurations, optimize S3 storage, automate deployments with Amplify, implement robust security with AWS WAF and Cognito, and ensure high availability with AWS Load Balancers (ALB, NLB, CLB). My commitment to automation and best practices ensures reliable and efficient AWS deployments.",
        des3: "I excel in designing and implementing secure and scalable AWS deployments, leveraging services like EC2, Route53, S3, Amplify, AWS WAF, Cognito, and AWS Load Balancers. My focus is on automating deployment processes, optimizing performance, and ensuring robust security. I am committed to implementing industry best practices and utilizing AWS tools to deliver reliable and high-quality cloud solutions. I am passionate about solving complex deployment challenges and continuously expanding my knowledge of AWS services.",
        capabilities: {
            desc: "I offer a comprehensive range of AWS deployment and DevOps services:",
            points: [
                "EC2 instance management and scaling.",
                "Route53 DNS configuration and optimization.",
                "S3 storage solutions and data management.",
                "Amplify deployment and CI/CD pipelines.",
                "AWS WAF and Cognito security implementation.",
                "AWS Load Balancing (ALB, NLB, CLB) configuration and optimization."
            ]
        },
        approch: "I take a structured and automated approach to AWS deployment and DevOps, focusing on scalability, security, and efficiency. Every project starts with understanding your application’s requirements and designing an optimal AWS architecture. My focus is on automating deployments, implementing security best practices, and ensuring high availability.",
        process: [
            "Understanding your application’s deployment and operational requirements.",
            "Designing a scalable and secure AWS architecture using EC2, Route53, S3, etc.",
            "Implementing CI/CD pipelines with Amplify for automated deployments.",
            "Configuring AWS WAF and Cognito for robust security.",
            "Setting up and optimizing AWS Load Balancers (ALB, NLB, CLB) for high availability.",
            "Monitoring and maintaining the AWS infrastructure for optimal performance and reliability."
        ],
        icon: "flaticon-verified",
        ssImg1: awsImgS2,
        ssImg2: awsImgS3
    },
    {
        Id: "5",
        sImgS: psImgS1,
        sTitle: "Physical Server Deployment",
        description: "I provide robust and efficient physical server deployment and management solutions, ensuring optimal performance and reliability.",
        des1: "I specialize in physical server deployment, building robust and high-performance infrastructure tailored to your specific needs. This includes server selection, hardware configuration, operating system installation, network setup, and security implementation. I ensure seamless deployment and optimal operational efficiency.",
        des2: "My expertise lies in crafting resilient and adaptable physical server environments, the foundation of reliable on-premise infrastructure. I manage server hardware configurations, optimize operating system installations, design robust network setups, and implement stringent security measures. My commitment to best practices ensures reliable and efficient physical server deployments.",
        des3: "I excel in designing and implementing secure and scalable physical server deployments, focusing on hardware optimization, network configuration, and security best practices. My focus is on automating deployment processes, optimizing performance, and ensuring robust security. I am committed to implementing industry best practices and utilizing specialized tools to deliver reliable and high-quality server solutions. I am passionate about solving complex deployment challenges and continuously expanding my knowledge of server hardware and software.",
        capabilities: {
            desc: "I offer a comprehensive range of physical server deployment and management services:",
            points: [
                "Server hardware selection and configuration.",
                "Operating system installation and optimization.",
                "Network infrastructure design and setup.",
                "Storage solution implementation and management.",
                "Security hardening and firewall configuration.",
                "Server monitoring and maintenance."
            ]
        },
        approch: "I take a structured and performance-driven approach to physical server deployment, focusing on reliability, security, and efficiency. Every project starts with understanding your infrastructure requirements and designing an optimal server architecture. My focus is on automating deployments, implementing security best practices, and ensuring high availability.",
        process: [
            "Understanding your infrastructure and application requirements.",
            "Selecting and configuring appropriate server hardware.",
            "Installing and optimizing the operating system for performance.",
            "Designing and setting up the network infrastructure.",
            "Implementing storage solutions and data management.",
            "Configuring security measures and firewalls.",
            "Monitoring and maintaining the server infrastructure for optimal performance and reliability."
        ],
        // icon: "flaticon-add",
        icon: "flaticon-self-growth",
        ssImg1: psImgS2,
        ssImg2: psImgS3
    }
]

export default Services;