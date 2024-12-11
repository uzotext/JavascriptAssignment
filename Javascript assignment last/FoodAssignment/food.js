
             
            const classesOfFood = [
                
                { name: "Carbohydrates", examples: "Bread, Rice" },
                { name: "Vitamins", examples: "Fruits, Vegetables" },
                { name: "Fats", examples: "Oils, Butter, Nuts" },
                { name: "Proteins", examples: "Fish, Meat, Beans" },
                { name: "Minerals", examples: "Milk, Salt, Spinach" },
                { name: "Water", examples: "Drinking water" },
            ];
    
             
            const table = document.createElement("table");
    
            
            const headerRow = document.createElement("tr");
            const headers = ["Class of Food", "Examples"];
            
            headers.forEach(headerText => {
                const th = document.createElement("th");
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
    
            
            classesOfFood.forEach(foodClass => {
                const row = document.createElement("tr");
    
            
                const nameCell = document.createElement("td");
                nameCell.textContent = foodClass.name;
                row.appendChild(nameCell);
    
               
                const examplesCell = document.createElement("td");
                examplesCell.textContent = foodClass.examples;
                row.appendChild(examplesCell);
    
                table.appendChild(row);
            });
    
            
            document.body.appendChild(table);
        