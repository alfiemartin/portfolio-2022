interface WorkCardProps {
  title: string;
  description: string | JSX.Element;
}

const WorkCard = ({ title, description }: WorkCardProps) => {
  return (
    <div className="bg-purple-400 border-purple-300 border-b-purple-400 border-2 p-2 shadow-lg">
      <h5 className="mb-8">{title}</h5>
      {false &&
        <p>{description}</p>
      }
    </div>
  );
};

export const WorkExperience = () => {
  return (
    <div>
      <h1>Professional Experience</h1>
      <div className="mt-4 flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-16">
          <WorkCard
            title="Self Employed"
            description="during djfdj Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nulla ducimus consequatur, minima corrupti possimus non
            incidunt voluptas rerum tempore voluptatem temporibus, odit numquam
            illum hic! Dolorem alias ipsa vel sapiente praesentium magnam, enim
            quas hic asperiores quis nam placeat obcaecati veritatis incidunt
            officiis accusamus officia ut autem. Vitae, amet deleniti?"
          />
           <WorkCard
            title="Remarkable Commerce"
            description="during djfdj Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nulla ducimus consequatur, minima corrupti possimus non
            incidunt voluptas rerum tempore voluptatem temporibus, odit numquam
            illum hic! Dolorem alias ipsa vel sapiente praesentium magnam, enim
            quas hic asperiores quis nam placeat obcaecati veritatis incidunt
            officiis accusamus officia ut autem. Vitae, amet deleniti?"
          />
           <WorkCard
            title="Experian"
            description="during djfdj Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nulla ducimus consequatur, minima corrupti possimus non
            incidunt voluptas rerum tempore voluptatem temporibus, odit numquam
            illum hic! Dolorem alias ipsa vel sapiente praesentium magnam, enim
            quas hic asperiores quis nam placeat obcaecati veritatis incidunt
            officiis accusamus officia ut autem. Vitae, amet deleniti?"
          />
        </div>
      </div>
    </div>
  );
};
