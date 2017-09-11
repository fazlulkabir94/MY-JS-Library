jQuery(document).ready(function($) {
		var id=[
	         ['one','two','three','four','five','six','seven','eight'],
	         ['nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen'],
	         ['seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two','twenty-three','twenty-four'],
	         ['twenty-five','twenty-six','twenty-seven','twenty-eight','twenty-nine','thirty','thirty-one','thirty-two'],
	         ['thirty-three','thirty-four','thirty-five','thirty-six','thirty-seven','thirty-eight','thirty-nine','forty'],
	         ['forty-one','forty-two','forty-three','forty-four','forty-five','forty-six','forty-seven','forty-eight'],
	         ['forty-nine','fifty','fifty-one','fifty-two','fifty-three','fifty-four','fifty-five','fifty-six'],
             ['fifty-seven','fifty-eight','fifty-nine','sixty','sixty-one','sixty-two','sixty-three','sixty-four']
	          ];
	          function valid(row,col){
	          	if (row>=0 && row<8 && col>=0 && col<8) {
	          		return true;
	          	}
	          	else{
	          		false;
	          	}
	          }

	          	$('table').click(function(event) {
		var row=event.target.parentElement.rowIndex;
		var collumn=event.target.cellIndex;
		setInterval(function(){
			$('#'+id[row][collumn]).css('background', 'red');
			row=row+1;
			collumn=collumn+1;
		},1000);
});
});
