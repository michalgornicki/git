const DOM = () => {
  document.addEventListener("DOMContentLoaded", function () {

    console.log(document.getElementsByClassName("body")[0].getBoundingClientRect())
  });

  return (
    <div className="body">
      
    </div>
  );
};

export default DOM;
