function getCategories(context) {
    return Array.from(context.querySelectorAll("section.categories article[id^=cat]")).map((categoryArticleElement, i) => {
        let category = {
            id: `treejs-${i}`,
            text: categoryArticleElement.querySelector(".bordered-heading span").textContent.trim(),
            attributes: {
                type: 0
            },
            children: []
        };
    
        let categoryChildrenElements = Array.from(categoryArticleElement.querySelectorAll(".cats-list>div")).map(categoryChildElement => Array.from(categoryChildElement.children)).flat();
        let j = -1;
        let k = 0;
        categoryChildrenElements.forEach((categoryChildElement) => {
            if (categoryChildElement.classList.contains("cats-list__row-ttl")) {
                j++;
                k = 0;

                category.children.push({
                    id: `treejs-${i}-${j}`,
                    text: categoryChildElement.textContent.trim(),
                    attributes: {
                        type: 1
                    },
                    children: []
                });
    
                if (categoryChildElement.nextElementSibling?.classList.contains("cats-list__row-ttl")) {
                    delete category.children[category.children.length - 1].children;
                    category.children[category.children.length - 1].attributes = {
                        href: `${categoryChildElement.href}`,
                        type: 2
                    }
                }
            } else {
                category.children[category.children.length - 1].children.push({
                    id: `treejs-${i}-${j}-${k}`,
                    text: categoryChildElement.textContent.trim(),
                    attributes: {
                        href: `${categoryChildElement.href}`,
                        type: 2
                    }
                });
                k++;
            }
        });

        return category;
    });
}