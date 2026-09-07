function AboutUs() {
  return (
    <section className="about-us" id="about" aria-labelledby="about-title">
      <div className="about-us__eyebrow">Rooted in care</div>
      <h2 id="about-title">About Paradise Nursery</h2>
      <p>
        Paradise Nursery is a family-inspired online plant shop devoted to
        making homes greener, calmer, and more welcoming. We hand-select
        healthy houseplants that suit every level of plant-care experience.
      </p>
      <p>
        Our team partners with responsible growers and carefully prepares each
        plant for its journey. Whether you need an air-purifying statement
        plant, a pet-friendly favorite, or an easy-care companion, we will help
        you find the right match for your space.
      </p>
      <div className="about-us__values" aria-label="Company values">
        <span>Responsibly sourced</span>
        <span>Carefully packed</span>
        <span>Plant-parent support</span>
      </div>
    </section>
  );
}

export default AboutUs;
