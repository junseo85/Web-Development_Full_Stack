import React from 'react';
import {Link} from 'react-router-dom';

function TopicsPage(){
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#Web Servers">Servers</a>
                <a href="#Fronted Design">Design</a>
                <a href="#Optimizing images">Images</a>
                <a href="#Favicons">Favicons</a>
                <a href="#Stylesheets">Stylesheets</a>
            </nav>
            <article id="Web Servers">
                <h3>Web Servers</h3>
                <p>In most of real-world web applications, the file index.html in the root directory is called the homepage, which is configured to return whenever GET requested. However, on other servers such as Microsoft's .NET platform, they are allowed to use default.html as a homepage. Sometimes, server look for index.js or index.php as the homepage</p>
                <p>One of the main differences between a file's network details on the web server versus the local computer is the name of the file which is loaded on the homepage. Through local computer server, the file name is called index.html, which is an actual HTML file. Through web server, the file name is called a1-seoj2/ which is the short version of request URL. File's details on the local computer has the request URL that displays specific file name and location on the computer. File's details on the web server's URL has location of the server. It also includes IP address.</p>
                <p>Favicon.ico is the only file which has the status code 200. The status code 200 means that the request succeeded, and the response body has the needed information. Because the requested resource is not found on the server for CSS and JS file, main.css and main.js file has status of code 404.</p>
                <p>In my web file, Scheme is HTTPS. A URL starts with a scheme, which is followed by a colon. The host domain is oregonstate which is a nickname of a computer or any device connected to the specific IP address. The subdomain is web.engr. is a physical address used to access a website. The server uses /~seoj2/a1-seoj2/ to identify the specific resource that the client has requested.</p>
            </article>
            <article id="Fronted Design">
                <h3>Frontend Design</h3>
                <p>frontend design is the most important role which can make users decide to weather to continue using that website or leave. The graphical user-interface(GUI) makes it easier for user to understand how to navigate without losing focus. The visual design,texture of photos or colors, on the page can make text visible or invisible. Photo/file size can make website run very slow if it is not compressed or resized. Because user's experience is so important, there are 5 thinks in the list, Five "E",which needs to be check all the time.</p>
                <dl>
                    <dt>Effective</dt>
                    <dd>at helping users meet their goal(s).</dd>
                    <dt>Efficient</dt>
                    <dd>so users can perform tasks with the least number of steps.</dd>
                    <dt>Easy to navigate</dt>
                    <dd>especially for users that have never used it before.</dd>
                    <dt>Error-free</dt>
                    <dd>to avoid accessibility and availability issues.</dd>
                    <dt>Enjoyable to use, or engaging</dt>
                    <dd>It fits the unique needs of the intended audience in content and design.</dd>
                </dl>
                    <p>The purpose of page layout tags is to help machines (such as search engine robots and screen readers) to understand which area of the page includes which components. The header element is usually a signature or sign which helps the user to know that they are on the same website while they go through different pages. Nav element is the tab where users can click to go through different sections of the page or to the other pages. It can be created more than one nav element in the site. Main element is the body of the website, where it holds most of the important information/images/videos. Section element is just like the different categories in the newspaper. It gives user a separation from one story to the others. Article element is located within a section, and it brings out more specific information. The Nav element can pinpoint each article on the menu that users can easily jump around the different articles. Aside element is the separate box which can be used either side of the page to support the main information. Figure and figcaption elements are mainly used to describe the photos/videos.  Blockquote element is to bring out the quotation for users to see it clearly. Footer element usually holds the most critical legal information on the bottom of pages. It can also include contact information. Copyright symbols are typically used with ASCII. Div element is used to divide between completely different information.</p>                <ol>
                    <li> A &lt;Nav&gt; block typically has page-to-page, section-to-section, or article-to-article groups of anchors using relative paths. &lt;Nav&gt; block creates hyperlinks from one item to another using the anchor element &lt;a&gt;</li>
                    <li>An internal anchor makes use of an ID value to jump down to other sections or articles that are marked with the id="" attribute.</li>    
                    <li>An external anchor can link to other websites using an absolute path.</li> 
                    <li>The href attribute is used to specify the path/URL where the link will take the user when it is clicked.</li>
                </ol>
            </article>
            <article id="Optimizing images">
                <h3>Optimizing images</h3>
                <p>SVG, file size-15k, has the most crisp text. Also known as Scalable Vector Graphics are typically used on two-dimensional, interactive or animated images.GIF is commonly used as animated photo/video which are typically used for line-art graphics. PNG is best to use for biomorphic shapes and line art. It does have a true transparency, but the photo is pixelated when it is compressed by software. JPG can only be used for a photo images. They can be compressed down to a small sized file. WebP also is used only on photo images. Just like JPG, it can be compressed down to a small size file, but this can have a transparent background.</p>
                <p>Since PNG is the only type of file that can handle both photos and for line art in the same file format, it is the most appropriate to be used.</p>
            </article>
            <article id="Favicons">
                <h3>Favicons</h3>
                <p>Browser uses favicon to display a unique symbol or icon which displays in the browser tab or a search engine results list. Other devices such as phone, tablet or other devices will display favicons on the screen. It also displays as icon on any devices which is displayed in the correct size for the right devices. There are multiple favicon files created so that browsers or devices can pick up the right files.</p>
            </article>
            <article id="Stylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>Cascading Style Sheets is what makes websites alive. It completely changes a look and feel of the website and makes it user-friendly. CSS allows every detail on the website to be redesigned, such as font style and size to the layout and design of the page. There are 5 Ways to Incorporate Styles. By properly understanding the style rules, website loading can be greatly reduced.</p>
                <dl>
                    <dt>Inheritance</dt>
                    <dd>Because Inheritance is the lowest in styling method order, elements, and values can easily overrule and ignored.</dd>
                    <dt>Inline attributes</dt>
                    <dd>Inline attribute has the second-lowest priority in styling method order. Inline attributes can be easily copied and pasted without losing data.</dd>
                    <dt>External Style sheet</dt>
                    <dd>External Style sheet is usually stored in an external file and the file needs to be linked and loaded into a CSS file.</dd>
                    <dt>Embedded Styles</dt>
                    <dd>Value is assigned to specific style</dd>
                    <dt>Specificity or selectors</dt>
                    <dd>Specificity or selectors has the highest priority and it overrules any styling method. It is not a styling method, but priorities depend on how the programmer selects the element in order, such as tags, classes, and ID.</dd>
                </dl>
            </article>

        </>
    );
}
        
export default TopicsPage;