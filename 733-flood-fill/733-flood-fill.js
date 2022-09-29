/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

      if( image[sr][sc] === color || image === undefined){
         return image;
       }
    const oldColor = image[sr][sc];
    function changeArray(image, r, c, oldColor, color){
       //check if row or column are out of bounds toward top or out of bounds toward the bottom
       if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== oldColor) return;
        //change image to reflect current coords
        image[r][c] = color;
        changeArray(image, r - 1, c, oldColor, color);//top of curr pixel
        changeArray(image, r + 1, c, oldColor, color);//bottom of curr pixel
        changeArray(image, r, c - 1, oldColor, color);//left of curr pixel
        changeArray(image, r, c + 1, oldColor, color);//right of curr pixel
    }
    //pass initial row and column coords
    changeArray(image, sr, sc, oldColor,color);
    
    //return new image
    return image;
};

   




