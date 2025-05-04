import React from 'react'

function SideNavbar() {
    return (
        <section class="cloths_view">
            <div class="category_section">
                <h1 className='font-bold text-xl pb-3'>Category</h1>
                <div class="category">
                    <h3>✔ Choose Color</h3>
                    <div>
                        <input type="checkbox" name="checkbox" />
                        <label for="checkbox">T-shirt</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkbox" />
                        <label for="checkbox">Shirt</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkbox" />
                        <label for="checkbox">Paint</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkbox" />
                        <label for="checkbox">Shoes</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkbox" />
                        <label for="checkbox">Girl's Shoes</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkbox" />
                        <label for="checkbox">Girl's top</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkbox" />
                        <label for="checkbox">Girl's Ethinic Wear</label>
                    </div>
                </div>
            </div>
            <div class="cloths_section">
                <div class="boxes"></div>
            </div>
        </section>
    )
}

export default SideNavbar
