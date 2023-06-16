const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <section>
        <p>Copyright &copy; Emmanuel González - {currentYear}</p>
      </section>
    </footer>
  );
};

export { Footer };
