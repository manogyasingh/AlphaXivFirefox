# i used this to make the icons. thought it might be useful to put here
from PIL import Image

input_filename="abc.png" 
output_filename="xyz.png"
img_size_tuple=(48,48) #(say)

img = Image.open(input_filename)
img = img.resize(img_size_tuple, Image.Resampling.LANCZOS)
img.save(output_filename, format="PNG")
