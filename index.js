// ** Question 1

firstArray = ["A", "B", "C"];

function createObjFromArray(anyArray) {
	var newArray = [];

	anyArray.forEach(e => {
		newObj = { name: e };
		newArray.push(newObj);
	});

	return newArray;
}

console.log("Q1: ",createObjFromArray(firstArray));


//** Question 2

secondArray = ["A", "B", "C", "Z", "Q"];

function createObjFromArray2(anyArray) {
	var newObj = {};

	anyArray.forEach(e => {
		newObj[e] = anyArray.indexOf(e);
	});

	return JSON.stringify(newObj);
}

console.log("Q2: ", createObjFromArray2(secondArray));



// ** Question 3

tree = { value: 1, children: [{ value: 2, children: [{ value: 3, children: [] }] }, { value: 4, children: [{ value: 5, children: [] }, { value: 6, children: [] }] }] };


function sumUpTree(anyObject, newArray) {

	if (newArray.length === 0) {
		newArray.push(anyObject.value);
	}

	anyObject.children.forEach(e => {
		newArray[0] += e.value;
		sumUpTree(e, newArray);
	});

	return newArray[0];
}

console.log("Q3: ",sumUpTree(tree, newArray = []));


// ** Question 4

stringArray = ["dog", "cat", "mouse", "sky", "eleven"];
const q4Regex = /[a-z][aeiou][a-z]{2}/g;


function twoVowel(anyArray) {

	let newArray = [];
	anyArray.forEach(e => {
		if ([...e.matchAll(q4Regex)].length > 0) {
			newArray.push([...e.matchAll(q4Regex)][0].input);
		}
	});

	return newArray;
}

console.log("Q4: ",twoVowel(stringArray));

// ** Question 5

const q5Regex = /([aeiou])/g;
const q5Regex2 = /([aeiou]{2,})/g;

function setParentheses(anyArray) {

	anyArray.forEach((element, i) => {
		let wordsWith2Vowels = element.matchAll(q5Regex2);
		for (const word of wordsWith2Vowels) {
			anyArray[i] = element.replaceAll(word[0], '($&)');
		}
	});

	anyArray.forEach((element, i) => {
		let wordsWithVowels = element.matchAll(q5Regex);
		for (const word of wordsWithVowels) {
			anyArray[i] = element.replaceAll(element[word.index], '($&)');
		}
	});

	console.log("Q5: ",anyArray );
	return anyArray;
}

// console.log(setParentheses(stringArray));

const answers = document.querySelector('.results');

function showResults(result) {

	const ul = document.createElement('ul');

	if (Array.isArray(result)) {

		result.forEach(e => {
			let li = document.createElement('li');

			if (Object.keys(e) == 'name') {
				li.innerHTML = `${Object.keys(e)} : ${Object.values(e)}`;
			} else {
				li.innerHTML = e;
			}
			ul.append(li);
		});

	} else if (typeof (result) == 'number') {
		let li = document.createElement('li');
		li.innerHTML = result;
		ul.append(li);
	} else {
		const obj = JSON.parse(result);

		for (const data in obj) {
			let li = document.createElement('li');
			li.innerHTML = `${data} : ${obj[data]}`;
			ul.append(li);
		};
	};

	answers.append(ul);
};

showResults(createObjFromArray(firstArray));
showResults(createObjFromArray2(secondArray));
showResults(sumUpTree(tree, newArray = []));
showResults(twoVowel(stringArray));
showResults(setParentheses(stringArray));