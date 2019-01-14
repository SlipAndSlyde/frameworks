class Grid
{
  constructor()
  {
    this.width = canvas.width;
    this.height = canvas.height;
    this.alpha = 1;

    this.data = [
      [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 0, 4, 4, 4, 4, 4, 4],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    ];

    this.dataTiles = this.refreshDataTiles();
  }

  get rows()
  {
    return this.data.length;
  }

  get columns()
  {
    return this.data[0].length;
  }

  get tileWidth()
  {
    return this.width / this.columns;
  }

  get tileHeight()
  {
    return this.height / this.rows;
  }

  refreshDataTiles()
  {
    let x, y = 0, tileWidth = this.tileWidth, tileHeight = this.tileHeight;
    let dataTiles = [];

    this.data.forEach((arr, i) => {
      x = 0;
      dataTiles.push(new Array());

      arr.forEach((char, j) => {
        if(char === 1) dataTiles[i].push(new Tile(x, y, tileWidth, tileHeight, img.arrow_up, this.alpha));
        if(char === 2) dataTiles[i].push(new Tile(x, y, tileWidth, tileHeight, img.arrow_right, this.alpha));
        if(char === 3) dataTiles[i].push(new Tile(x, y, tileWidth, tileHeight, img.arrow_down, this.alpha));
        if(char === 4) dataTiles[i].push(new Tile(x, y, tileWidth, tileHeight, img.arrow_left, this.alpha));

        x += this.tileWidth;
      });

      y += this.tileHeight;
    });

    return dataTiles;
  }

  draw()
  {
    this.dataTiles.forEach((arr) => {
      arr.forEach((tile) => {
        tile.draw();
      });
    });
  }

}
