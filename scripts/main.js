
document.querySelectorAll('.links a').forEach(function(link) {
  link.onmouseenter = function() {
    this.style.transform = 'scale(1.1)';
    this.style.marginLeft = '5px';
  };
  
  link.onmouseleave = function() {
    this.style.transform = 'scale(1)';
    this.style.marginLeft = '0';
  };
});
document.querySelector('.pic').onmouseover = () => document.querySelector('.pic').style.transform = 'scale(1.1)';
document.querySelector('.pic').onmouseout = () => document.querySelector('.pic').style.transform = 'scale(1)';