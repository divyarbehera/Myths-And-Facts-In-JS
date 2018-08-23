var getLicense = () => {
    return new Promise((resolve, error) => {
        var licenseElement = Array.from(document.querySelectorAll("a[title*='LICENSE']") || "").find((link) => link.getAttribute("itemprop") === "license");

        if (!licenseElement) {
            resolve("");
        }

        var licenseLink = licenseElement.getAttribute("href");

        if (!licenseLink) {
            resolve("");
        }

        fetch(licenseLink)
            .then((fetchResult) => fetchResult.text())
			.then((licenseHtmlContets) => {
                    var el = document.createElement("body");
                    el.innerHTML = licenseHtmlContets;
                    var tblLicenseText = el.querySelector(".js-file-line-container");
                    if (tblLicenseText.tBodies.length < 1) {
                        resolve("");
                    }
                    var txtLicenseRow = Array.from(tblLicenseText.tBodies[0].rows).find(row => {
                        var rowText = (row.textContent || "").toLowerCase();
                        return rowText.indexOf("copyright") != -1 && rowText.indexOf("(c)") != -1;
                    });
                    resolve(txtLicenseRow ? txtLicenseRow.textContent.trim() : "");
            })
            .catch(e => {
                error(e);
            });
    });
}
getLicense().then(r => {console.log(r);});