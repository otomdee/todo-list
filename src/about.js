export function populateAbout() {
    const page = document.querySelector("#content");

    const aboutDiv = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    aboutDiv.id = "about";
    span1.id = "hours";
    span2.id = "location";

    span1.innerHTML = "Hours & Location";
    span2.innerHTML = "4230 Berge Cliff, New Laureenbury, HI 54604-8709<hr>Open Every Day of The Week: 7:00A.M - 10:00PM<hr>Phone: 2839-0983-0293, 1244-2093-0922";

    aboutDiv.append(span1);
    aboutDiv.append(span2);

    page.append(aboutDiv);
}