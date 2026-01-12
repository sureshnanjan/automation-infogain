import {test,expect} from '@playwright/test';
import { HomePageOperations } from '@src/operations/HomePageOperations';
import { HomePage } from '@src/web-implementation/HomePage';
import { SortableTableOperation } from '@src/operations/SortableTableOperations';
import { getHerokuApp } from '@src/utilities/herokuapp-utils';
import { ReadTheHugeDataFromExcel } from '@src/utilities/herokuapp-utils';

test.describe("HTML Table Related",()=>{
    test("Example 1 Table row 1",({page})=>{
        const homePage:HomePageOperations = getHerokuApp(page);
        const htmpage:SortableTableOperation = homePage.gotoExample('htmlpage');
        const exampleTable = htmpage.getExample1Data();
        const row1 = exampleTable[0];
        const actual_result_r1 = `${row1.lname}\t${row1.fname}\t${row1.email}\t${row1.due}\t${row1.website}`;
        expect(actual_result_r1).toBe(expected_result_r1);
    }   

        // Arrange
        const expected_result_r1 = "Smith	John	jsmith@gmail.com	$50.00	http://www.jsmith.com" 
        const expected_result_r2 = "Smith	John	jsmith@gmail.com	$50.00	http://www.jsmith.com" 



    });
    test("Example 1 Table sortable by lname",({page})=>{
        // Arrange
        //const expected = ['Bach','Conway','Doe','Smith'];
        const expected = ReadTheHugeDataFromExcel();
        const homePage:HomePageOperations = getHerokuApp(page);
        const htmpage:SortableTableOperation = homePage.gotoExample('htmlpage');
        const exampleTable = htmpage.getExample1Data();
        // Act
        const actual = htmpage.sortExample(1,'lname');
        // Sort by lname
        expect(actual).toEqual(expected)
        


        


    });

    test("Example 1 Table sortable by fname",({page})=>{
        // Arrange
        //const expected = ['Bach','Conway','Doe','Smith'];
        const expected = ReadTheHugeDataFromExcel();
        const expectedjson = ReadTheHugeDataFromJSON();
        const homePage:HomePageOperations = getHerokuApp(page);
        const htmpage:SortableTableOperation = homePage.gotoExample('htmlpage');
        const exampleTable = htmpage.getExample1Data();
        // Act
        const actual = htmpage.sortExample(1,'fname');
        // Sort by lname
        expect(actual).toEqual(expected)
        


        


    });

})