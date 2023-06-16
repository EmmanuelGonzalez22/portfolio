const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>Developed by Emmanuel González &copy; {currentYear}</p>
    </footer>
  );
};

export { Footer };
