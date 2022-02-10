const DOM = () => {
  document.addEventListener("DOMContentLoaded", function () {

    console.log(document.getElementsByClassName("body")[0].getBoundingClientRect())
  });

  return (
    <div className="body">
            <div className="js-item">
        {" "}
        <div className=""> </div>
        <div className="text-pink">
          <pre>{`
git clone https://github.com/michalgornicki/react.git

//Cloning repo will download all of the project's code and metadata from source.
          `}</pre>
        </div>
      </div>
    </div>
  );
};

export default DOM;
