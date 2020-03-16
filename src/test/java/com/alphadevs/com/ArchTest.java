package com.alphadevs.com;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.alphadevs.com");

        noClasses()
            .that()
                .resideInAnyPackage("com.alphadevs.com.service..")
            .or()
                .resideInAnyPackage("com.alphadevs.com.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..com.alphadevs.com.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
