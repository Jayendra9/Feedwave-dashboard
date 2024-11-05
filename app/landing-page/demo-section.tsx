const DemoSection = () => {
    return (
      <section className="container mx-auto max-w-screen-xl px-4 my-24 text-center">
        <h2 className="mb-6 text-2xl font-bold">See Feedwave in Action!</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden">
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/F-JLcuou__0"
                title="Feedwave Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default DemoSection;
  