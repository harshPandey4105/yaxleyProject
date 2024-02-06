import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Website</h1>
        {/* You can add navigation links or other header content here */}
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vestibulum eros nec tortor tincidunt, id fermentum purus euismod.
            Vivamus porta, leo ut suscipit lacinia, lacus eros tempus mauris,
            at dignissim justo velit ac magna.
          </p>
        </section>
        <section>
          <h2>Services</h2>
          <p>
            Integer rhoncus pharetra risus vel gravida. Mauris non enim et
            odio porttitor suscipit. Aliquam eu turpis eu arcu consectetur
            luctus.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            Phasellus sed odio eget nisl dignissim ultricies. Curabitur
            aliquet, quam ac pretium aliquam, dolor ex molestie justo, eget
            fermentum libero neque vel arcu.
          </p>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <p>This is the footer of my website</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
