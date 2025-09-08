 

const submittedData = [
  {
    title: "React.js",
    description: "JavaScript library for building user interfaces",
    img: "react-logo.png",
  },
  {
    title: "Java",
    description: "Object-oriented programming language",
    img: "java-logo.png",
  },
];

 

const ViewPage = () => {
  return (
    <div className="view-container">
      <h1 className="view-title">Submitted Skills</h1>
      <ul className="view-card-list">
        {submittedData.map((data, index) => (
          <li key={index} className="view-card">
            <img src={data.img} alt={data.title} className="view-card-image" />
            <h3 className="view-card-title">{data.title}</h3>
            <p className="view-card-description">{data.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPage;
