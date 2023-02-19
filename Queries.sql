-- SELECT 
--     SalesLT.Customer.CustomerID, o.OrderDate, p.ProductName, od.Quantity
-- FROM 
--     SalesLT.Customer c
--     JOIN Orders o ON c.CustomerID = o.CustomerID
--     JOIN OrderDetails od ON o.OrderID = od.OrderID
--     JOIN SalesLT.Product p ON od.ProductID = p.ProductID;


-- SELECT TABLE_NAME
-- FROM INFORMATION_SCHEMA.TABLES
-- WHERE TABLE_TYPE = 'BASE TABLE'
-- ORDER BY TABLE_NAME;

SELECT c.CustomerID, c.FirstName, c.MiddleName, c.LastName, a.AddressLine1, a.City, a.StateProvince, p.ProductID, p.Name, p.ListPrice
FROM SalesLT.Customer c
JOIN SalesLT.CustomerAddress ca ON c.CustomerID = ca.CustomerID
JOIN SalesLT.Address a ON ca.AddressID = a.AddressID
JOIN SalesLT.SalesOrderHeader soh ON c.CustomerID = soh.CustomerID
JOIN SalesLT.SalesOrderDetail sod ON soh.SalesOrderID = sod.SalesOrderID
JOIN SalesLT.Product p ON sod.ProductID = p.ProductID;