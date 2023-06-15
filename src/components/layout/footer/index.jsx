const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <p>Developed by Emmanuel González &copy; {currentYear}</p>
    </div>
  );
};

export { Footer };
