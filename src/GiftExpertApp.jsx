import {useState} from 'react';
import { AddCategory, GifGrid} from './componentes';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cumpleaños']);
    

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ]);
    }
    
    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            
            { 
            categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        categoria={category}
                    />
                )
            )}
                
                
            
        </>
    )
}