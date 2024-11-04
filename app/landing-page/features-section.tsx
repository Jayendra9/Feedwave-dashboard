import Feature from './feature';

const features = [
  {
    title: 'Effortless Integration  🔗',
    description: 'Integrate seamlessly with your favorite tools and services',
  },
  {
    title: 'Highly Customizable   🎨',
    description: 'Tailor Feedwave to meet your unique requirements and preferences',
  },
  {
    title: 'Real-time Analytics   📈',
    description: 'Analyze feedback instantly to drive informed decision-making',
  },
  {
    title: 'Data Privacy  🛡️',
    description: 'Your data is protected and secure with Feedwave',
  },
  {
    title: 'Scalable Solutions   🌱',
    description: 'Easily expand your capabilities as your business grows',
  },
  {
    title: 'User-Centric Design   ✏️',
    description: 'Enjoy a platform designed with user feedback at its core',
  },
];


const FeaturesSection = () => {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 my-24 flex items-center flex-col">
      <h2 className="mb-6 text-2xl font-bold">Features</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;