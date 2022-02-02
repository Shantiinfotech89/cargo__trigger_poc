import { Component, OnInit } from '@angular/core';
import  * as LiteGraph  from "litegraph.js";
export function abc(): any {

}
@Component({
  selector: 'app-litegraph',
  templateUrl: './litegraph.component.html',
  styleUrls: ['./litegraph.component.css']
})

export class LitegraphComponent implements OnInit {
  constructor() {}
  public static Stage1tag: any = class Stage1tag {};
  public static Stage2onentry: any = class Stage2onentry {};
  public static emailbody: any = class emailbody {};
  public static emailrecipient: any = class emailrecipient {};
  ngOnInit():void {
    var graph = new LiteGraph.LGraph();
    var canvas = new LiteGraph.LGraphCanvas("#mycanvas2", graph);
    LiteGraph.LiteGraph.registerNodeType("basic/stage1tag",LitegraphComponent.Stage1tag);
    LiteGraph.LiteGraph.registerNodeType("basic/stage2onentry", LitegraphComponent.Stage2onentry );
    LiteGraph.LiteGraph.registerNodeType("basic/emailbody", LitegraphComponent.emailbody ); 
    LiteGraph.LiteGraph.registerNodeType("basic/emailrecipient", LitegraphComponent.emailrecipient ); 
    /* stage 1*/
    var nodeSum_l2 = LiteGraph.LiteGraph.createNode("basic/stage1tag");
    
    nodeSum_l2.pos = [100, 110];
    nodeSum_l2.title = "my custom node ";
    var a4da22e13e6f = nodeSum_l2.addInput("Tags","number"); 
       nodeSum_l2.addWidget("toggle",'a4da22e13e6f', true, function(v){
         nodeSum_l2.connect(0, nodeSum_l3,0);  
    }, { on: "on", off:"off"});
    var a4da22e13de8f = nodeSum_l2.addWidget("toggle","a4da22e13de8f", false, function(v){
         nodeSum_l2.connect(0, nodeSum_l3,0);  
    }, { on: "on", off:"off"});
    var a4da22e12356d =  nodeSum_l2.addWidget("toggle","a4da22e12356d", false, function(v){
         nodeSum_l2.connect(0, nodeSum_l3,0);  
    }, { on: "on", off:"off"});
    var a4da22e12724f = nodeSum_l2.addWidget("toggle","a4da22e12724f", true, function(v){
         nodeSum_l2.connect(0, nodeSum_l3,0);  
    }, { on: "on", off:"off"}); 
    nodeSum_l2.addOutput("zone1","number");
    nodeSum_l2.properties = { precision: 1 };
    console.log("I am jinnn");
    LitegraphComponent.Stage1tag.prototype.onConnectionsChange = function(inputoutput ="",slot ="",bolln= "",linkinfo="", inputinfo="" ) {
      nodeSum_l3.connect(0, nodeSum_l4,0);
      nodeSum_l4.connect(0, nodeSum_l5,0);
      console.log(a4da22e13e6f);
      // console.log(a4da22e13e6f.name +"--"+this.a4da22e13e6f.value);
      // console.log(a4da22e13de8f.name +"--"+this.a4da22e13de8f.value);
      // console.log(a4da22e12356d.name+"--"+this.a4da22e12356d.value);
      // console.log(a4da22e12724f.name+"--"+this.a4da22e12724f.value);
  }

    graph.add(nodeSum_l2);
   /* stage 1 end */ 
  
  /* stage2onentry start */
     const nodeSum_l3 = LiteGraph.LiteGraph.createNode("basic/stage2onentry");
     nodeSum_l3.pos = [400, 106];
      nodeSum_l3.addInput("On Entry","number");
     var currentzone = nodeSum_l3.addWidget("combo","Zone","Zone_0001",function(){
       nodeSum_l2.connect(0, nodeSum_l3,0);  
    },{values:["Zone_0001","Zone_0002","Zone_0003","Zone_0004"]});
    nodeSum_l3.addOutput("Trigger","number");
    nodeSum_l3.properties = { precision: 1 };
     graph.add(nodeSum_l3);
  /* stage2onentry end */

  /* emailbody start */
     const nodeSum_l4 = LiteGraph.LiteGraph.createNode("basic/emailbody");
     nodeSum_l4.pos = [700, 130];
     graph.add(nodeSum_l4);
     nodeSum_l4.addInput("Email body","number");
     nodeSum_l4.addOutput("Email target","number");
     nodeSum_l4.addWidget("text",'','');
     nodeSum_l4.properties = { precision: 1 };
  /* emailbody start */

  /* emailrecipient start */
      const nodeSum_l5 = LiteGraph.LiteGraph.createNode("basic/emailrecipient");
      nodeSum_l5.pos = [1000, 100];
      graph.add(nodeSum_l5);
      nodeSum_l5.addInput("Email recipient","number");
      nodeSum_l5.addWidget("text",'aaaa1','bbb1');
      nodeSum_l5.properties = { precision: 1 };
  /* emailrecipient start */


    graph.start();

   
  }

}
