class Tile
{
  constructor(x, y, width, height, img, alpha)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.img = img;
    this.alpha = alpha;
  }

  draw()
  {
    ctx.save();

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    ctx.restore();
  }
}
