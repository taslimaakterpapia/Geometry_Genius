// ----------------------------------triangle----------------------------

document.getElementById('triangle-btn').addEventListener('click', function(){


    const trianglFirstField = document.getElementById('triangle-first-field');
    const triangleFirstFieldString = trianglFirstField.value;
     const trianglFirstFieldValue = parseFloat(triangleFirstFieldString);

    

     
    const trianglSecondField = document.getElementById('triangle-second-field');
    const triangleSecondFieldString = trianglSecondField.value;
    const triangleSecondFieldValue = parseFloat(triangleSecondFieldString);

  

    const totalTriangleFieldValue = 0.5 * trianglFirstFieldValue * triangleSecondFieldValue ;

    // console.log(totalTriangleFieldValue);

   

})

// ----------------------------------Rectangle----------------------------


document.getElementById('rectangle-btn').addEventListener('click', function(){


    const rectangleFirstField = document.getElementById('rectangle-first-field');
    const rectangleFirstFieldString = rectangleFirstField.value;
     const rectangleFirstFieldValue = parseFloat(rectangleFirstFieldString);

    

     
    const rectangleSecondField = document.getElementById('rectangle-second-field');
    const rectangleSecondFieldString = rectangleSecondField.value;
    const rectangleSecondFieldValue = parseFloat(rectangleSecondFieldString);

  

    const totalRectangleFieldValue = rectangleFirstFieldValue * rectangleSecondFieldValue ;

    // console.log(totalRectangleFieldValue);

   

})



// ----------------------------------Parallelogram----------------------------


document.getElementById('parallelogram-btn').addEventListener('click', function(){


    const parallelogramFirstField = document.getElementById('parallelogram-first-field');
    const  parallelogramFirstFieldString =  parallelogramFirstField.value;
     const  parallelogramFirstFieldValue = parseFloat( parallelogramFirstFieldString);

    

     
    const  parallelogramSecondField = document.getElementById('parallelogram-second-field');
    const  parallelogramSecondFieldString =  parallelogramSecondField.value;
    const  parallelogramSecondFieldValue = parseFloat( parallelogramSecondFieldString);

  

    const totalParallelogrameFieldValue =  parallelogramFirstFieldValue *  parallelogramSecondFieldValue ;

    // console.log(totalParallelogrameFieldValue);

   

})


// ----------------------------------Rhombus----------------------------


document.getElementById('rhombus-btn').addEventListener('click', function(){


    const rhombusFirstField = document.getElementById('rhombus-first-field');
    const  rhombusFirstFieldString =  rhombusFirstField.value;
     const  rhombusFirstFieldValue = parseFloat(rhombusFirstFieldString);

    

     
    const  rhombusSecondField = document.getElementById('rhombus-second-field');
    const  rhombusSecondFieldString =  rhombusSecondField.value;
    const  rhombusSecondFieldValue = parseFloat( rhombusSecondFieldString);

  

    const totalRhombusFieldValue = 0.5 * rhombusFirstFieldValue *  rhombusSecondFieldValue ;

    // console.log(totalRhombusFieldValue);

   

})




// ----------------------------------Pentagon----------------------------


document.getElementById('pentagon-btn').addEventListener('click', function(){


    const pentagonFirstField = document.getElementById('pentagon-first-field');
    const  pentagonFirstFieldString =  pentagonFirstField.value;
     const  pentagonFirstFieldValue = parseFloat(pentagonFirstFieldString);

    

     
    const  pentagonSecondField = document.getElementById('pentagon-second-field');
    const  pentagonSecondFieldString =  pentagonSecondField.value;
    const  pentagonSecondFieldValue = parseFloat( pentagonSecondFieldString);

  

    const totalPentagonFieldValue = 0.5 * pentagonFirstFieldValue *  pentagonSecondFieldValue ;

    // console.log(totalPentagonFieldValue);

   

})


// ----------------------------------Ellipse----------------------------


document.getElementById('ellipse-btn').addEventListener('click', function(){


    const ellipseFirstField = document.getElementById('ellipse-first-field');
    const  ellipseFirstFieldString =  ellipseFirstField.value;
     const  ellipseFirstFieldValue = parseFloat(ellipseFirstFieldString);

    

     
    const  ellipseSecondField = document.getElementById('ellipse-second-field');
    const  ellipseSecondFieldString =  ellipseSecondField.value;
    const  ellipseSecondFieldValue = parseFloat( ellipseSecondFieldString);

  

    const totalEllipseFieldValue = 3.0416 * ellipseFirstFieldValue *  ellipseSecondFieldValue ;

    console.log(totalEllipseFieldValue);

   

})

