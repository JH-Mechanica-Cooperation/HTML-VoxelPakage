/*저작권은 JH-Mechanica-Cooperation 에게 있습니다.
무단 배포 시 처벌 받을 수 있습니다.

All copyrights are reserved to JH-Mechanica-Cooperation.
YOU CAN BE PUNISHED IF YOU SHARE.*/
var VoxelCanvas = document.getElementById("voxelcanvas").getElementsByTagName("section")[0];

var Voxel = {

addVoxel:function(){
var voxel=document.getElementsByClassName("cube")[0].cloneNode(true);
nodes.push(voxel);
document.getElementById("cubes").appendChild(voxel);
voxel.style.transform = "translate3d("+x+"px,"+y+"px,"+z+"px)";
}
}//Voxel. functions


function refreshVoxelCanvas(){
for(var en in nodes){
nodes[en].remove();
}
nodes=[];
}


function Texture(t0,t1,t2,t3,t4,t5){
this.textureType = {t0:t0, t1:t1, t2:t2, t3:t3, t4:t4, t5:t5};
}

