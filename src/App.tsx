import React, { useState, useEffect } from 'react';
import { Github, Instagram, Mail, Code, ExternalLink, Terminal, ShoppingBag } from 'lucide-react';

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEMS');

  useEffect(() => {
    const messages = [
      'INITIALIZING SYSTEMS',
      'CONNECTING TO CYBERSPACE',
      'BYPASSING SECURITY',
      'ACCESSING NEURAL NETWORK',
      'LOADING MATRIX DATA',
      'ESTABLISHING UPLINK'
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 1;
        setProgress(currentProgress);
        if (currentProgress % 20 === 0) {
          setStatusText(messages[Math.floor(currentProgress / 20)]);
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        <div className="mb-8 flex items-center justify-center">
          <Terminal className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-6xl font-mono text-cyan-400 glitch mb-4" data-text="VM">
            VM
          </h1>
          <p className="text-cyan-400 font-mono">{statusText}</p>
        </div>
        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-cyan-400"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
              transition: 'width 0.1s ease-out'
            }}
          />
        </div>
        <div className="text-right font-mono text-cyan-400">
          {progress}%
        </div>
        <div className="mt-4 font-mono text-xs text-cyan-600 overflow-hidden h-20">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap" style={{ animation: `slideUp 10s ${i * 0.5}s linear infinite` }}>
              {Array.from({ length: 32 }).map((_, j) => (
                <span key={j} className="mr-1">
                  {Math.random().toString(16).substr(2, 2)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-cyan-400">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=2000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
           <h1 className="glitch text-2xl font-bold mb-4">VM</h1>
          </div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
            <a 
              href="https://vm-store.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Store
            </a>
          </div>
        </nav>
        <div className="relative z-10 text-center">
          <h1 className="glitch text-6xl font-bold mb-4" data-text="Victor Mattos">
            Victor Mattos
          </h1>
          <p className="text-xl neon-text">Dev Junior</p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="https://github.com/victormattos564" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-cyan-300 transition-colors" />
            </a>
            <a href="https://instagram.com/iam.mattosz" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-cyan-300 transition-colors" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-12 text-center glitch" data-text="About Me">About Me</h2>
        <div className="max-w-3xl mx-auto card-glow p-8 rounded-lg">
          <p className="text-lg leading-relaxed">
            Olá! Me chamo Victor Mattos, sou desenvolvedor web Front-end/Back-End com dois anos 
            de experiência no curso de Desenvolvimento de Sistemas do SENAI. Sou apaixonado por 
            tecnologia e programação, e estou sempre em busca de novos desafios e aprendizados.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-black/50">
        <h2 className="text-4xl font-bold mb-12 text-center glitch" data-text="Skills">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'HTML5', desc: 'HTML5 é uma linguagem de marcação de hipertexto, que usamos para marcar os elementos da página e construí-la.' },
            { name: 'CSS3', desc: 'CSS3 é uma linguagem de estilo usada para descrever a apresentação dos elementos da página os estilizando.' },
            { name: 'JavaScript', desc: 'JavaScript é uma linguagem de programação interpretada usada no desenvolvimento web para descrever funcionalidades e comportamentos da página.' },
            { name: 'React', desc: 'React é uma biblioteca JavaScript para construção de interfaces de usuário, mantida pela Facebook e por uma comunidade de desenvolvedores individuais e empresas.' },
            { name: 'Node.JS', desc: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.' },
            { name: 'PostgreSQL', desc: 'PostgreSQL é um sistema gerenciador de banco de dados objeto-relacional com foco em extensibilidade e conformidade com padrões.' }
          ].map((skill, index) => (
            <div key={index} className="card-glow p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-4 neon-text">{skill.name}</h3>
              <p className="text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-12 text-center glitch" data-text="Featured Projects">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'User Register',
              desc: 'Sistema de cadastro de usuários desenvolvido com HTML e Javascript, permitindo registro e visualização de dados.',
              image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=500',
              tech: ['HTML', 'CSS', 'JavaScript'],
              demo: 'https://1-tds-1-user-register.vercel.app',
              code: 'https://github.com/victormattos564/1TDS1UserRegister'
            },
            {
              title: 'To-do List',
              desc: 'Aplicativo de gerenciamento de tarefas intuitivo e eficiente para organizar suas atividades diárias.',
              image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=500',
              tech: ['HTML', 'JavaScript', 'CSS'],
              demo: 'https://to-do-list-pi-pearl.vercel.app',
              code: 'https://github.com/victormattos564/To-do-List'
            },
            {
              title: 'Dashboard Financeiro',
              desc: 'Dashboard para controle e visualização de finanças pessoais com interface moderna e intuitiva.',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500',
              tech: ['React', 'JavaScript', 'CSS'],
              demo: 'https://dashboard-financeiro.netlify.app',
              code: 'https://github.com/victormattos564'
            },
            {
              title: 'Sistema Python PowerBI',
              desc: 'Sistema integrado com Python e PowerBI para análise e visualização de dados.',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500',
              tech: ['React', 'JavaScript', 'CSS'],
              demo: 'https://sistema-python-powerby.netlify.app',
              code: 'https://github.com/victormattos564'
            },
            {
              title: 'VM Store',
              desc: 'Loja virtual com design moderno e experiência de compra intuitiva.',
              image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=500',
              tech: ['React', 'JavaScript', 'CSS'],
              demo: 'https://vm-store.netlify.app',
              code: 'https://github.com/victormattos564'
            }
          ].map((project, index) => (
            <div key={index} className="card-glow rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 neon-text">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-cyan-900/50 rounded text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                  >
                    <Code className="w-4 h-4" /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-black/50">
        <h2 className="text-4xl font-bold mb-12 text-center glitch" data-text="Contact">Contact</h2>
        <div className="flex justify-center gap-8">
          <a href="mailto:victorhmmaria@gmail.com" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
            <Mail className="w-6 h-6" /> Email Me
          </a>
          <a href="https://instagram.com/iam.mattosz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
            <Instagram className="w-6 h-6" /> Instagram
          </a>
          <a href="https://github.com/victormattos564" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
            <Github className="w-6 h-6" /> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;