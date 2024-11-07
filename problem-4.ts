
interface Circle {
    shape: "circle";
    radius: number;
}

interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;


const calculateShapeArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
       return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
  return 0;
};

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log('sample input one', circleArea); 

// Sample Input 2:
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log('sample input two',rectangleArea);