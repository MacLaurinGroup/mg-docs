/*
	(c) 2019 MacLaurin Group

	This is a helper-class containing dropin replace functionality.
*/

class DropinsManager {
	process(_string) {
		let ret = _string;
		ret = this.fullYearDropin(ret);
		ret = this.fullMonthDropin(ret);
		return ret;
	}

	// ====================================================
	// ====================================================

	fullYearDropin(_string) {
		return _string.replace(/{full_year}/g, (new Date()).getFullYear());
	}

	// ====================================================
	// ====================================================

	fullMonthDropin(_string) {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];

		return _string.replace(/{full_month}/g, months[(new Date()).getMonth()]);
	}
}

module.exports = new DropinsManager();