package sk.umb.skuska.jdaxner.projekt.controller;

import org.springframework.web.bind.annotation.*;
import sk.umb.skuska.jdaxner.projekt.domain.Cd;
import sk.umb.skuska.jdaxner.projekt.domain.CdDto;
import sk.umb.skuska.jdaxner.projekt.domain.Zaner;
import sk.umb.skuska.jdaxner.projekt.service.CdService;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CdController {
    public CdController(CdService cdService) {
        this.cdService = cdService;
    }

    private CdService cdService;

    @PostMapping("/api/add-cd")
    public Cd addCd(@RequestBody CdDto requestDto) {
        return cdService.addCd(requestDto);
    }

    @GetMapping("/api/get-cd")
    public List<Cd> getCd(){
        List<Cd> cds = cdService.getAllCd();
        return cds;
    }

}
