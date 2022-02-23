var x=false;
var caveData ={
	info:{
		layout:[
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,x,x,x,8,x,x,8,x,x,x,x,x,8,8,x,x,x,x,x,x,x,8,8,x,x,8,x,x,x,8,x,x,x,1],
			[8,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
			
			
		],
		src:`images/bgCave.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:65, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:44, height:44, startX:580, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
			[5,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5],
			[5,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
			[5,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,5],
			[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],

			],
			src:`images/bgCave.png`,
		},
		states:
		[		
				{
					fps:5,
					cycle:false,
					frames:[
						{width:64, height:64, startX:0, startY:0}// 0 plane block
	
					]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:128, startY:0}]// 1 crack left
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:320, startY:0}]// 2 crack right
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:256, startY:0}]// 3 gold crack left
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:192, startY:0}]// 4 gold crack right
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:64, startY:0}]// 5 cracked blocks
				},
				{
					fps:20,
					cycle:true,
					frames:[
						{width:64, height:64, startX:384, startY:0},// 6 water drip
						{width:64, height:64, startX:448, startY:0},
						{width:64, height:64, startX:512, startY:0}
					]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:0, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:64, height:64, startX:0, startY:0}]
				}
			]
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/bgCave.png`,
			},
			states:
			[		
					{
						fps:5,
						cycle:false,
						frames:[
							{width:16, height:16, startX:0, startY:0}
						]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:16, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:32, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:48, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:64, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:80, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:96, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:112, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:128, startY:0}]
					}
				]
			}