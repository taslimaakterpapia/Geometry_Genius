document.getElementById('calculate-btn').addEventListener('click', function(){


    const calculateField = document.getElementById('triangle-first-field');
    const newResultdString = calculateField.value;
     const newResultField = parseFloat(newResultdString);

     calculateField.value = '';

     
    const trianglSecondField = document.getElementById('triangle-second-field');
    const newtriangleSecondFieldString = trianglSecondField.value;
    const newtriangleSecondField = parseFloat(newtriangleSecondFieldString);

    trianglSecondField.value = '';

    const currentcalculateField = 0.5 * newResultField * newtriangleSecondField ;

    trianglSecondField.value = currentcalculateField;


    console.log(currentcalculateField);
 

    

})




