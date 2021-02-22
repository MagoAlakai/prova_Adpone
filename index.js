

function show_output(){
    let input = document.getElementById("input").value;
    let arr_input = input.split("");
    let arr_final = [];
    let index = 0;
    let i = 1;
    let counter = 1;

    while(i <= arr_input.length){
        if(arr_input[index] === arr_input[i]){
            counter ++;
            i++;
        }else if(arr_input[index] !== arr_input[i] || arr_input.length === i - 1){
            arr_final.push([arr_input[index], counter]);
            index = i;
            i++;
            counter = 1;
        }
    }
    //Muestra en la consola el output
    console.log(arr_final);
}