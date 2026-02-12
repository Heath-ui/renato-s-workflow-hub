const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-mono text-sm font-bold tracking-tight text-gradient">
          RENATO<span className="text-foreground">.</span>
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Renato Balbutin II. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
