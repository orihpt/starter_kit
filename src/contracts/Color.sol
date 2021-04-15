pragma solidity 0.5.0;

import "./ERC721Full.sol";

contract Color is ERC721Full {

	string[] public colors;
	mapping(string => bool) _colorExists; // Dictionary
	
	constructor() ERC721Full("Color", "COLOR") public {
	}

	function mint(string memory _color) public {
		// Require unique color
		require(!_colorExists[_color]);
		uint _id = colors.push(_color); // Append
		_mint(msg.sender, _id);
		_colorExists[_color] = true;
	}
}