# Tecboard

Um site moderno e responsivo para monitoramento em tempo real com alertas inteligentes.

## Características

- **Design responsivo**: Otimizado para desktop, tablet e mobile
- **Modo escuro e claro**: Alterne entre temas com persistência no localStorage
- **Interface moderna**: Cores vibrantes e tipografia elegante
- **Animações suaves**: Transições agradáveis entre elementos

## Estrutura do Projeto

```
Tecboard/
├── index.html          # Arquivo principal HTML
├── script.js           # JavaScript (opcional)
├── css/
│   └── style.css      # Estilos CSS
├── Fonts/
│   ├── Unbounded-Bold.ttf
│   └── Poppins-Regular.ttf
└── img/
    ├── logo-tecboard-branco.png
    ├── logo-tecboard-preto.png
    ├── modo-claro.png
    ├── modo-escuro.png
    ├── celulares-sobrespostos-desktop.png
    └── Favicon-tecboard-roxo.png
```

## Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Clique no botão de alternância de modo (canto superior direito) para trocar entre modo claro e escuro
3. Sua preferência será salva automaticamente

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos com variáveis CSS (custom properties)
- **JavaScript**: Funcionalidade de alternância de tema com localStorage
- **Fonts**: Unbounded (headings) e Poppins (texto)

## Paleta de Cores

### Modo Escuro
- Fundo: `#0E1014`
- Texto: `#F5F5F5`
- Botão: `#9747FF`
- Botão Hover: `#8233E8`

### Modo Claro
- Fundo: `#FFFFFF`
- Texto: `#232323`
- Botão: `#9747FF`
- Botão Hover: `#8233E8`

## Funcionalidades

### Alternância de Tema
O site detecta automaticamente se o usuário tem uma preferência de tema salva no localStorage e a aplica ao carregar. Ao clicar no botão de alternância:

- O tema alterna entre claro e escuro
- As imagens do logo são atualizadas
- A preferência é salva para futuras visitas

## Responsividade

- **Desktop**: Layout completo com espaçamento generoso
- **Tablet**: Ajustes para telas menores (até 768px)
- **Mobile**: Layout otimizado para dispositivos móveis (até 520px)

## Autor

Projeto desenvolvido como parte do curso de Carreira Front-end React da Alura.

## Licença

Este projeto é fornecido como está para fins educacionais.
