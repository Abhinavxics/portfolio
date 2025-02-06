const colors = {
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m'
};

const logo = `
${colors.cyan}
   █████╗ ██████╗ ██╗  ██╗██╗███╗   ██╗ █████╗ ██╗   ██╗
  ██╔══██╗██╔══██╗██║  ██║██║████╗  ██║██╔══██╗██║   ██║
  ███████║██████╔╝███████║██║██╔██╗ ██║███████║██║   ██║
  ██╔══██║██╔══██╗██╔══██║██║██║╚██╗██║██╔══██║╚██╗ ██╔╝
  ██║  ██║██████╔╝██║  ██║██║██║ ╚████║██║  ██║ ╚████╔╝ 
  ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  
${colors.reset}`;

const info = `
${colors.green}⭐ Portfolio Development Server${colors.reset}
${colors.yellow}Name:${colors.reset} Abhinav Chaurasia
${colors.yellow}Location:${colors.reset} Lucknow, India
${colors.yellow}Age:${colors.reset} 17
${colors.yellow}Email:${colors.reset} abhinavcodesleep.com@gmail.com

${colors.blue}Starting development server...${colors.reset}
`;

const border = `${colors.magenta}${'═'.repeat(60)}${colors.reset}`;

console.clear();
console.log(border);
console.log(logo);
console.log(border);
console.log(info); 